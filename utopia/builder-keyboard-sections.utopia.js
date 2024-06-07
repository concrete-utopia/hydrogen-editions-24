import * as Utopia from 'utopia-api'
import Hero from '/app/routes/products.builder-keyboard/sections/hero'
import CTA from '/app/routes/products.builder-keyboard/sections/cta'
import Features from '/app/routes/products.builder-keyboard/sections/features'

const Components = {
  '/app/routes/products.$handle/sections/hero': {
    Hero: {
      component: Hero,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
  '/app/routes/products.builder-keyboard/sections/cta': {
    CTA: {
      component: CTA,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
    },
  },
  '/app/routes/products.builder-keyboard/sections/features':
    {
      Features: {
        component: Features,
        properties: {},
        inspector: 'hidden',
        focus: 'always',
      },
    },
}

export default Components
