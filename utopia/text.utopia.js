import * as Utopia from 'utopia-api'
import { Heading, Text, Span } from '@h2/new/Text'
import { BooleanSegmentControl } from './layout.utopia'

const tshirtSizes = [
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
]

const HeadingVariants = tshirtSizes.map((size) => ({
  label: `Heading (size ${size})`,
  imports: `import { Heading } from '@h2/new/Text'`,
  code: `<Heading size={'${size}'}>
    Lorem ipsum
</ Heading>`,
}))

const TextVariants = tshirtSizes.map((size) => ({
  label: `Text (size ${size})`,
  imports: `import { Text } from '@h2/new/Text'`,
  code: `<Text size={'${size}'}>
    Lorem ipsum 
</ Text>`,
}))

const HeadingContents = [
  {
    component: 'Heading',
    moduleName: '@h2/new/Text',
    variants: HeadingVariants,
  },
]

const TextContents = [
  {
    component: 'Text',
    moduleName: '@h2/new/Text',
    variants: TextVariants,
  },
]

export const DefaultTextContents = [
  ...HeadingContents,
  ...TextContents,
]

const SharedTextProperties = {
  size: {
    control: 'popuplist',
    options: tshirtSizes.map((size) => ({
      label: size,
      value: size,
    })),
    folder: 'Size',
  },
  width: {
    control: 'popuplist',
    options: [
      {
        label: 'narrow',
        value: 'narrow',
      },
      {
        label: 'base',
        value: 'base',
      },
      {
        label: 'wide',
        value: 'wide',
      },
      {
        label: 'full',
        value: 'full',
      },
    ],
    folder: 'Size',
  },
  weight: {
    control: 'popuplist',
    options: [
      {
        value: 'light',
        label: 'light',
      },
      {
        value: 'regular',
        label: 'regular',
      },
      {
        value: 'medium',
        label: 'medium',
      },
      {
        value: 'semibold',
        label: 'semibold',
      },
      {
        value: 'bold',
        label: 'bold',
      },
    ],
    folder: 'Character',
  },
  align: {
    control: 'radio',
    options: [
      {
        value: 'left',
        label: '',
        icon: 'TextAlignLeft',
      },
      {
        value: 'center',
        label: '',
        icon: 'TextAlignCenter',
      },
      {
        value: 'right',
        label: '',
        icon: 'TextAlignRight',
      },
    ],
    folder: 'Paragraph',
  },
  wrap: {
    control: 'radio',
    options: [
      {
        value: 'nowrap',
        label: '—',
      },
      {
        value: 'wrap',
        label: 'Wrap',
      },
      // omitted values:
      // {
      //   value: 'pretty',
      //   label: 'pretty',
      // },
      // {
      //   value: 'balance',
      //   label: 'balance',
      // },
      // {
      //   value: 'bold',
      //   label: 'bold',
      // },
    ],
    folder: 'Paragraph',
  },
  color: {
    control: 'popuplist',
    options: [
      {
        value: 'text',
        label: 'text',
      },
      {
        value: 'black',
        label: 'black',
      },
      {
        value: 'accent',
        label: 'accent',
      },
      {
        value: 'white',
        label: 'white',
      },
      {
        value: 'gray',
        label: 'gray',
      },
    ],
    folder: 'Character',
  },
  truncate: {
    control: 'radio',
    options: [
      {
        label: '—',
        value: true,
      },
      {
        label: 'A...',
        value: false,
      },
    ],
    folder: 'Paragraph',
  },
  uppercase: {
    ...BooleanSegmentControl,
    folder: 'Character',
  },
  fontStyle: {
    control: 'radio',
    options: [
      {
        value: 'italic',
        label: '',
        icon: 'Italic',
      },
      {
        value: 'underline',
        label: '',
        icon: 'Underline',
      },
      {
        value: 'strike',
        label: '',
        icon: 'Strikethrough',
      },
    ],
    folder: 'Character',
    label: 'Font style',
  },
  font: {
    control: 'radio',
    options: [
      {
        value: 'sans',
        label: '',
        icon: 'FontStyleSansSerif',
      },
      {
        value: 'serif',
        label: '',
        icon: 'FontStyleSerif',
      },
      {
        value: 'mono',
        label: '',
        icon: 'FontStyleMonospace',
      },
      {
        value: 'display',
        label: '',
        icon: 'FontStyleScript',
      },
    ],
    folder: 'Character',
  },
  leading: {
    control: 'popuplist',
    options: [
      {
        value: 'none',
        label: 'none',
      },
      {
        value: 'tight',
        label: 'tight',
      },
      {
        value: 'snug',
        label: 'snug',
      },
      {
        value: 'normal',
        label: 'normal',
      },
      {
        value: 'relaxed',
        label: 'relaxed',
      },
      {
        value: 'loose',
        label: 'loose',
      },
    ],
    folder: 'Paragraph',
    label: 'Line height',
  },
}

const annotations = {
  Heading: {
    component: Heading,
    properties: SharedTextProperties,
    focus: 'never',
    inspector: 'hidden',
    variants: HeadingVariants,
    icon: 'title',
  },
  Text: {
    component: Text,
    properties: SharedTextProperties,
    focus: 'never',
    inspector: 'hidden',
    variants: TextVariants,
    icon: 'text',
  },
  Span: {
    component: Span,
    properties: {
      ...SharedTextProperties,
      transparent: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: `Span`,
        imports: `import { Span } from '@h2/new/Text'`,
        code: `<Span>
        Lorem ipsum
    </ Span>`,
      },
      {
        label: `Span (transparent)`,
        imports: `import { Span } from '@h2/new/Text'`,
        code: `<Span transparent>
        Lorem ipsum
    </ Span>`,
      },
    ],
    icon: 'text',
  },
}

const Components = {
  '/app/components/hydrogen/new/Text': annotations,
  '@h2/new/Text': annotations,
}

export default Components
