import * as Utopia from 'utopia-api'
import { Placeholder } from 'utopia-api'
import {
  Background,
  Row,
  Column,
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

const SectionVariants = [
  {
    label: 'Section',
    imports: "import { Section } from '@h2/new/Layout'",
    code: `<Section />`,
  },
  {
    label: 'Section (padded)',
    imports: "import { Section } from '@h2/new/Layout'",
    code: `<Section padding />`,
  },
  {
    label: 'Section (with minHeight)',
    imports: "import { Section } from '@h2/new/Layout'",
    code: `<Section minHeight={800} />`,
  },
]

export const BooleanSegmentControl = Utopia.radioControl(
  BooleanSegmentControlOptions,
)

const RowWithPlaceholdersVariant = {
  label: 'Row with placeholders',
  imports: `import { Row } from '@h2/new/Layout'
    import { Placeholder } from 'utopia-api'`,
  code: `<Row>
  <Placeholder />
  <Placeholder />
</Row>`,
}

const EmptyRowVariant = {
  label: 'Row (empty)',
  imports: `import { Row } from '@h2/new/Layout'`,
  code: `<Row/>`,
}

const ColumnWithPlaceholdersVariant = {
  label: 'Column with placeholders',
  imports: `import { Column } from '@h2/new/Layout'
    import { Placeholder } from 'utopia-api'`,
  code: `<Column>
  <Placeholder />
  <Placeholder />
</Column>`,
}

const EmptyColumnVariant = {
  label: 'Column (empty)',
  imports: `import { Column } from '@h2/new/Layout'`,
  code: `<Column />`,
}

const DefaultLayoutContents = [
  {
    component: 'Row',
    moduleName: '@h2/new/Layout',
    variants: RowWithPlaceholdersVariant,
  },
  {
    component: 'Column',
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
  {
    component: 'Section',
    moduleName: '@h2/new/Layout',
    variants: SectionVariants,
  },
]

const ProductSections = [
  {
    component: 'Product Page Sections',
    moduleName: '',
    variants: [
      {
        label: 'Hero Section',
        imports: `import Hero from '/app/routes/products.$handle/sections/hero'`,
        code: `<Hero />`,
      },
      {
        label: 'HighlightDetails Section',
        imports: `import HighlightDetails from '/app/routes/products.$handle/sections/highlight-details'`,
        code: `<HighlightDetails />`,
      },
      {
        label: 'HighlightSolution Section',
        imports: `import HighlightSolution from '/app/routes/products.$handle/sections/highlight-solution'`,
        code: `<HighlightSolution />`,
      },
      {
        label: 'Recommended Section',
        imports: `import Recommended from '/app/routes/products.$handle/sections/recommended'`,
        code: `<Recommended />`,
      },
      {
        label: 'Reviews Section',
        imports: `import Reviews from '/app/routes/products.$handle/sections/reviews'`,
        code: `<Reviews />`,
      },
    ],
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

const rowAndColumn = [
  {
    component: 'Row',
    moduleName: '@h2/new/Layout',
    variants: RowWithPlaceholdersVariant,
  },
  {
    component: 'Column',
    moduleName: '@h2/new/Layout',
    variants: ColumnWithPlaceholdersVariant,
  },
]

const annotations = {
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
  Row: {
    component: Row,
    properties: {
      direction: Utopia.radioControl([
        {
          label: '',
          value: 'right',
          icon: 'FlexDirectionRow',
        },
        {
          label: '',
          value: 'left',
          icon: 'FlexDirectionRowReverse',
        },
      ]),
      align: Utopia.radioControl([
        {
          label: '',
          value: 'start',
          icon: 'AlignItemsRowFlexStart',
        },
        {
          label: '',
          value: 'center',
          icon: 'AlignItemsRowCenter',
        },
        {
          label: '',
          value: 'end',
          icon: 'AlignItemsRowFlexEnd',
        },
        {
          label: '',
          value: 'stretch',
          icon: 'AlignItemsRowStretch',
        },
        {
          label: '',
          value: 'baseline',
          icon: 'AlignItemsRowBaseline',
        },
      ]),
      justify: Utopia.radioControl([
        {
          label: '',
          value: 'start',
          icon: 'JustifyContentRowFlexStart',
        },
        {
          label: '',
          value: 'center',
          icon: 'JustifyContentRowCenter',
        },

        {
          label: '',
          value: 'end',
          icon: 'JustifyContentRowFlexEnd',
        },
        {
          label: '',
          value: 'between',
          icon: 'JustifyContentRowSpaceBetween',
        },
        {
          label: '',
          value: 'around',
          icon: 'JustifyContentRowSpaceAround',
        },
        {
          label: '',
          value: 'evenly',
          icon: 'JustifyContentRowSpaceEvenly',
        },
      ]),
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: BooleanSegmentControl,
      padded: BooleanSegmentControl,
      maxHeight: {
        control: 'number-input',
        label: 'Max Height',
      },
      maxWidth: {
        control: 'number-input',
        label: 'Max Width',
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
    },
    variants: [RowWithPlaceholdersVariant, EmptyRowVariant],
    children: {
      preferredContents: [
        PlaceholderContent,
        ...DefaultLayoutContents,
        ...DefaultTextContents,
        ...ProductSections,
      ],
    },
    icon: 'row',
  },
  Column: {
    component: Column,
    properties: {
      direction: Utopia.radioControl([
        {
          label: '',
          value: 'down',
          icon: 'FlexDirectionColumn',
        },
        {
          label: '',
          value: 'up',
          icon: 'FlexDirectionColumnReverse',
        },
      ]),
      align: Utopia.radioControl([
        {
          label: '',
          value: 'start',
          icon: 'AlignItemsColumnFlexStart',
        },
        {
          label: '',
          value: 'center',
          icon: 'AlignItemsColumnCenter',
        },
        {
          label: '',
          value: 'end',
          icon: 'AlignItemsColumnFlexEnd',
        },
        {
          label: '',
          value: 'stretch',
          icon: 'AlignItemsColumnStretch',
        },
        {
          label: '',
          value: 'baseline',
          icon: 'AlignItemsColumnBaseline',
        },
      ]),
      justify: Utopia.radioControl([
        {
          label: '',
          value: 'start',
          icon: 'JustifyContentColumnFlexStart',
        },
        {
          label: '',
          value: 'center',
          icon: 'JustifyContentColumnCenter',
        },
        {
          label: '',
          value: 'end',
          icon: 'JustifyContentColumnFlexEnd',
        },
        {
          label: '',
          value: 'between',
          icon: 'JustifyContentColumnSpaceBetween',
        },
        {
          label: '',
          value: 'around',
          icon: 'JustifyContentColumnSpaceAround',
        },
        {
          label: '',
          value: 'evenly',
          icon: 'JustifyContentColumnSpaceEvenly',
        },
      ]),
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: BooleanSegmentControl,
      padded: BooleanSegmentControl,
      maxHeight: {
        control: 'number-input',
        label: 'Max Height',
      },
      maxWidth: {
        control: 'number-input',
        label: 'Max Width',
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
    },
    variants: [
      ColumnWithPlaceholdersVariant,
      EmptyColumnVariant,
    ],
    children: {
      preferredContents: [
        PlaceholderContent,
        ...DefaultLayoutContents,
        ...DefaultTextContents,
        ...ProductSections,
      ],
    },
    icon: 'column',
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
      code: `<Spacer height={96} />`,
    },
    icon: 'dashedframe',
  },
  Section: {
    component: Section,
    properties: {
      padding: {
        control: 'radio',
        label: 'padded',
        options: BooleanSegmentControlOptions,
      },
      minHeight: {
        control: 'number-input',
        label: 'Min Height',
      },
    },
    focus: 'never',
    inspector: {
      display: 'collapsed',
    },
    variants: SectionVariants,
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
  Grid: {
    component: Grid,
    properties: {},
    icon: 'grid',
  },
}

const Components = {
  '/app/components/hydrogen/new/Layout': annotations,
  '@h2/new/Layout': annotations,
  'utopia-api': {
    Placeholder: {
      component: Placeholder,
      properties: {},
      children: 'not-supported',
    },
  },
}

export default Components
