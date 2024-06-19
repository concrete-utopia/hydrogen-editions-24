import { PromiseCard } from '../app/routes/_index/sections/our-promise'

const optionsWithIcons = [
  {
    label: '',
    value: 'gray',
    icon: 'Smiangle',
  },
  { label: '', value: 'black', icon: 'EyeOpen' },
  {
    label: '',
    value: 'accent',
    icon: 'Downloaded',
  },
]

/**
 * @type {import("utopia-api").ComponentToRegister}}}
 */
const PromiseCardAnnotation = {
  component: PromiseCard,
  inspector: {
    display: 'collapsed',
    sections: ['visual'],
  },
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
      max: 300,
    },
    dropShadow: {
      control: 'radio',
      options: [
        { label: 'Off', value: 'off' },
        { label: 'Soft', value: 'soft' },
      ],
      folder: 'advanced',
    },
    rotation: {
      control: 'number-input',
      min: 0,
      max: 90,
      folder: 'advanced',
    },
    offset: {
      control: 'vector2',
      folder: 'advanced',
    },
  },
  children: 'not-supported',
  icon: 'star',
  inspector: { display: 'collapsed', sections: ['visual'] },
  variants: [
    {
      imports:
        "import { PromiseCard } from '/app/routes/_index/sections/our-promise'",
      label: 'PromiseCard Gray',
      code: `<PromiseCard heading="Our Promise" description="We are committed to providing you with the best experience possible." color="gray" icon="guarantee" borderRadius={0} />`,
    },
    {
      imports:
        "import { PromiseCard } from '/app/routes/_index/sections/our-promise'",
      label: 'PromiseCard with Accent',
      code: `<PromiseCard heading="Our Promise" description="We are committed to providing you with the best experience possible." color="accent" icon="guarantee" borderRadius={0} />`,
    },
  ],
}

/**
 * @type {{[modulePath: string]: {[componentName:string]: import("utopia-api").ComponentToRegister}}}
 */
const Components = {
  '/app/routes/_index/sections/our-promise': {
    PromiseCard: {
      component: PromiseCard,
      properties: {},
    },
  },
}

export default Components
