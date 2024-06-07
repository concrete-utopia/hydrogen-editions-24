import * as Utopia from 'utopia-api'
import {
  Background,
  Flex,
  Spacer,
  Section,
  Container,
  HalfAndHalf,
  Grid,
} from '@h2/new/Layout'
import { DefaultTextContents } from './text.utopia.js'

const PlaceholderContent = {
  component: 'Placeholder',
  moduleName: 'utopia-api',
  variants: [],
}

export const BooleanSegmentControlOptions = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
]

export const BooleanSegmentControl = Utopia.radioControl(
  BooleanSegmentControlOptions,
)

const RowWithPlaceholdersVariant = {
  label: 'Flex row with placeholders',
  imports: `import { Flex } from '@h2/new/Layout'
    import { Placeholder } from 'utopia-api'`,
  code: `<Flex>
  <Placeholder />
  <Placeholder />
</Flex>`,
}

const ColumnWithPlaceholdersVariant = {
  label: 'Flex column with placeholders',
  imports: `import { Flex } from '@h2/new/Layout'
    import { Placeholder } from 'utopia-api'`,
  code: `<Flex direction={'column'}>
  <Placeholder />
  <Placeholder />
</Flex>`,
}

const DefaultLayoutContents = [
  {
    component: 'Flex row',
    moduleName: '@h2/new/Layout',
    variants: RowWithPlaceholdersVariant,
  },
  {
    component: 'Flex column',
    moduleName: '@h2/new/Layout',
    variants: ColumnWithPlaceholdersVariant,
  },
  {
    component: 'Placeholder',
    moduleName: 'utopia-api',
    variants: {
      label: 'Placeholder',
      imports: `import { Placeholder } from 'utopia-api'`,
      code: `<Placeholder />`,
    },
  },
]

const ContainerVariants = [
  {
    label: 'Container with placeholder',
    imports: `import { Container } from '@h2/new/Layout'
      import { Placeholder } from 'utopia-api'`,
    code: `<Container>
      <Placeholder />
    </Container>`,
  },
  {
    label: 'Container (Reviews Title)',
    imports: `import { Container } from '@h2/new/Layout'
      import { Placeholder } from 'utopia-api'`,
    code: `<Container paddingY='l' marginBottom>
      <Placeholder />
      <Placeholder />
    </Container>`,
  },
  {
    label: 'Container (Reviews Content)',
    imports: `import { Container } from '@h2/new/Layout'
      import { Placeholder } from 'utopia-api'`,
    code: `<Container paddingBottom='s' >
      <Placeholder />
      <Placeholder />
    </Container>`,
  },
]

const ContainerContents = [
  {
    component: 'Container',
    moduleName: '@h2/new/Layout',
    variants: ContainerVariants,
  },
]

const annotations = {
  Background: {
    component: Background,
    properties: {
      align: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'baseline',
          value: 'baseline',
        },
        {
          label: 'stretch',
          value: 'stretch',
        },
      ]),
      justify: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'between',
          value: 'between',
        },
      ]),
      columns: Utopia.sliderControl(1, 5, 1),
      rows: Utopia.sliderControl(1, 5, 1),
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'Background with placeholders',
        imports: `import { Background } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Background
        columns={2}
      >
        <Placeholder />
        <Placeholder />
      </Background>`,
      },
    ],
  },
  Flex: {
    component: Flex,
    properties: {
      direction: Utopia.radioControl([
        {
          label: 'right',
          value: 'right',
        },
        {
          label: 'down',
          value: 'down',
        },
        {
          label: 'left',
          value: 'left',
        },
        {
          label: 'up',
          value: 'up',
        },
      ]),
      align: Utopia.radioControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'baseline',
          value: 'baseline',
        },
        {
          label: 'stretch',
          value: 'stretch',
        },
      ]),
      justify: Utopia.radioControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'between',
          value: 'between',
        },
      ]),
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: BooleanSegmentControl,
      maxHeight: {
        control: 'radio',
        label: 'Max Height',
        options: BooleanSegmentControlOptions,
      },
      maxWidth: {
        control: 'radio',
        label: 'Max Width',
        options: BooleanSegmentControlOptions,
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      RowWithPlaceholdersVariant,
      ColumnWithPlaceholdersVariant,
    ],
    children: {
      preferredContents: [
        PlaceholderContent,
        ...DefaultLayoutContents,
        ...DefaultTextContents,
      ],
    },
    icon: 'layout',
  },
  Spacer: {
    component: Spacer,
    properties: {
      height: Utopia.numberControl(),
    },
    focus: 'never',
    inspector: 'hidden',
    children: 'not-supported',
    variants: {
      label: 'Spacer',
      imports: "import { Spacer } from '@h2/new/Layout'",
      code: `<Spacer height={144} />`,
    },
    icon: 'dashedframe',
  },
  Section: {
    component: Section,
    properties: {
      padded: BooleanSegmentControl,
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    variants: [
      {
        label: 'Section',
        imports: "import { Section } from '@h2/new/Layout'",
        code: `<Section />`,
      },
      {
        label: 'Section (padded)',
        imports: "import { Section } from '@h2/new/Layout'",
        code: `<Section padded />`,
      },
    ],
    children: {
      preferredContents: [
        PlaceholderContent,
        ...ContainerContents,
        ...DefaultLayoutContents,
        ...DefaultTextContents,
      ],
    },
    icon: 'section',
  },
  Container: {
    component: Container,
    properties: {
      fluid: BooleanSegmentControl,
      paddingBottom: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Bottom padding',
        folder: 'Padding',
      },
      paddingTop: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Top padding',
        folder: 'Padding',
      },
      paddingY: {
        control: 'radio',
        options: [
          {
            label: 'None',
            value: 'null',
          },
          {
            label: 'S',
            value: 's',
          },
          {
            label: 'M',
            value: 'm',
          },
          {
            label: 'L',
            value: 'l',
          },
        ],
        label: 'Vertical padding',
        folder: 'Padding',
      },

      marginBottom: {
        control: 'radio',
        options: BooleanSegmentControlOptions,
        label: 'Bottom margin',
        folder: 'Margin',
      },
      backgroundColor: {
        control: 'color',
        label: 'Background color',
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
      sections: ['typography'],
    },
    children: {
      preferredContents: [
        PlaceholderContent,
        ...DefaultLayoutContents,
        ...DefaultTextContents,
      ],
    },
    variants: ContainerVariants,
    icon: 'section',
  },
  HalfAndHalf: {
    component: HalfAndHalf,
    properties: {
      left: {
        control: 'jsx',
        preferredContents: [
          PlaceholderContent,
          ...DefaultLayoutContents,
          ...DefaultTextContents,
        ],
      },
      right: {
        control: 'jsx',
        preferredContents: [
          PlaceholderContent,
          ...DefaultLayoutContents,
          ...DefaultTextContents,
        ],
      },
      padded: BooleanSegmentControl,
      gap: Utopia.numberControl(),
    },
    focus: 'never',
    children: 'not-supported',
    variants: {
      label: 'HalfAndHalf',
      imports: `
        import { HalfAndHalf } from "/app/components/Components"
        import { Placeholder } from "utopia-api"`,
      code: `<HalfAndHalf
          style={{ gap: 10 }}
          left={<Placeholder />}
          right={<Placeholder />}
        />`,
    },
  },
  Grid: {
    component: Grid,
    properties: {},
    icon: 'grid',
  },
}

const Components = {
  '/app/components/hydrogen/new/Layout': annotations,
  '@h2/new/Layout': annotations,
}

export default Components
