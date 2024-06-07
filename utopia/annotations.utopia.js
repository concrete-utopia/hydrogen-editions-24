import { PromiseCard } from '../app/routes/_index/sections/our-promise'

/**
 * @type {{[modulePath: string]: {[componentName:string]: import("utopia-api").ComponentToRegister}}}
 */
const Components = {
  '/app/routes/_index/sections/our-promise': {
    PromiseCard: {
      component: PromiseCard,
      properties: {
        heading: {
          control: 'string-input',
        },
        description: {
          control: 'string-input',
        },
        color: {
          control: 'radio',
          options: [
            { label: 'Gray', value: 'gray' },
            { label: 'Black', value: 'black' },
            { label: 'Accent', value: 'accent' },
          ],
        },
        icon: {
          control: 'popuplist',
          options: [
            { label: 'Guarantee', value: 'guarantee' },
            { label: 'Trial', value: 'trial' },
            { label: 'Shipping', value: 'shipping' },
          ],
        },
        borderRadius: {
          control: 'number-input',
          min: 0,
          max: 100,
        },
      },
    },
  },
}

export default Components
