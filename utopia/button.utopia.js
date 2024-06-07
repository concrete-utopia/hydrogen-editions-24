import * as Utopia from 'utopia-api'
import { Button } from '@h2/new/Button'

const annotations = {
  Button: {
    component: Button,
    properties: {
      rounded: Utopia.radioControl([
        {
          label: 'base',
          value: 'base',
        },
        {
          label: 'full',
          value: 'full',
        },
      ]),
      color: Utopia.radioControl([
        {
          label: 'black',
          value: 'black',
        },
        {
          label: 'accent',
          value: 'accent',
        },
        {
          label: 'white',
          value: 'white',
        },
      ]),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: 'Button',
        imports: `import { Button } from '@h2/new/Button'`,
        code: `<Button>Sample Button</Button>`,
      },
      {
        label: 'Button (rounded)',
        imports: `import { Button } from '@h2/new/Button'`,
        code: `<Button rounded>Sample Button</Button>`,
      },
      {
        label: 'Button (accent)',
        imports: `import { Button } from '@h2/new/Button'`,
        code: `<Button accent>Sample Button</Button>`,
      },
    ],
  },
}

const Components = {
  '/app/components/hydrogen/new/Button': annotations,
  '@h2/new/Button': annotations,
}

export default Components
