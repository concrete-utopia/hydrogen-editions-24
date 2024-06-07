import * as Utopia from 'utopia-api'
import Accordion from '/app/components/hydrogen/new/Accordion'

const Components = {
  '/app/components/hydrogen/new/Accordion': {
    Accordion: {
      component: Accordion,
      properties: {
        data: Utopia.objectControl({
          id: Utopia.stringControl(),
          title: Utopia.stringControl(),
          content: Utopia.stringControl(),
        }),
      },
      focus: 'never',
      children: 'not-supported',
      inspector: 'hidden',
      variants: [
        {
          label: 'Accordion with sample data',
          imports:
            "import Accordion from '/app/components/hydrogen/new/Accordion'",
          code: `<Accordion data={[
            {
              id: '1',
              title: 'Materials',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias debitis illo unde itaque eius eos necessitatibus assumenda, quos nisi cum reprehenderit aut placeat modi corrupti repudiandae mollitia corporis et labore?',
            },
            {
              id: '2',
              title: 'Care Instructions',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias debitis illo unde itaque eius eos necessitatibus assumenda, quos nisi cum reprehenderit aut placeat modi corrupti repudiandae mollitia corporis et labore?',
            },
            {
              id: '3',
              title: 'Fit',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias debitis illo unde itaque eius eos necessitatibus assumenda, quos nisi cum reprehenderit aut placeat modi corrupti repudiandae mollitia corporis et labore?',
            },
          ]} />`,
        },
      ],
    },
  },
}

export default Components
