import { json } from '@shopify/remix-oxygen'

const METAOBJECT_UPDATE_MUTATION = `#graphql
mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
  metaobjectUpdate(id: $id, metaobject: $metaobject) {
    metaobject {
      handle
    }
    userErrors {
      field
      message
      code
    }
  }
}`

export async function action({ request, context }) {
  const body = await request.json()
  const result = await fetch(
    context.env.SHOPIFY_STORE_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token':
          context.env.SHOPIFY_STORE_ACCESS_TOKEN,
      },

      body: JSON.stringify({
        query: METAOBJECT_UPDATE_MUTATION,
        variables: {
          id: body.id,
          metaobject: {
            fields: [{ key: 'quote', value: body.value }],
          },
        },
      }),
    },
  ).then((res) => res.json())

  return json({
    status: 'success',
    body: JSON.stringify(result),
  })
}
