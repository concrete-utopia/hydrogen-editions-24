import * as Utopia from 'utopia-api'
import Hero from '/app/routes/products.$handle/sections/hero'
import HighlightDetails from '/app/routes/products.$handle/sections/highlight-details'
import HighlightSolution from '/app/routes/products.$handle/sections/highlight-solution'
import Recommended from '/app/routes/products.$handle/sections/recommended'
import Reviews, {
  Review,
  ReviewStatistics,
  ReviewsSkeleton,
} from '/app/routes/products.$handle/sections/reviews'
import Spotlight from '/app/routes/products.$handle/sections/spotlight'

const Components = {
  '/app/routes/products.$handle/sections/hero': {
    Hero: {
      component: Hero,
      properties: {},
      inspector: 'hidden',
      variants: [
        {
          label: 'Hero Section (Product Page)',
          imports: `import Hero from '/app/routes/products.$handle/sections/hero'`,
          code: `<Hero />`,
        },
      ],
    },
  },
  '/app/routes/products.$handle/sections/highlight-details':
    {
      HighlightDetails: {
        component: HighlightDetails,
        properties: {},
        inspector: 'hidden',
        variants: [
          {
            label: 'HighlightDetails Section',
            imports: `import HighlightDetails from '/app/routes/products.$handle/sections/highlight-details'`,
            code: `<HighlightDetails />`,
          },
        ],
      },
    },
  '/app/routes/products.$handle/sections/highlight-solution':
    {
      HighlightSolution: {
        component: HighlightSolution,
        properties: {},
        inspector: 'hidden',
        variants: [
          {
            label: 'HighlightSolution Section',
            imports: `import HighlightSolution from '/app/routes/products.$handle/sections/highlight-solution'`,
            code: `<HighlightSolution />`,
          },
        ],
      },
    },
  '/app/routes/products.$handle/sections/recommended': {
    Recommended: {
      component: Recommended,
      properties: {},
      inspector: 'hidden',
      variants: [
        {
          label: 'Recommended Section',
          imports: `import Recommended from '/app/routes/products.$handle/sections/recommended'`,
          code: `<Recommended />`,
        },
      ],
    },
  },
  '/app/routes/products.$handle/sections/reviews': {
    Reviews: {
      component: Reviews,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
      variants: [
        {
          label: 'Reviews Section',
          imports: `import Reviews from '/app/routes/products.$handle/sections/reviews'`,
          code: `<Reviews />`,
        },
      ],
    },
    ReviewsSkeleton: {
      component: ReviewsSkeleton,
      properties: {},
      inspector: 'hidden',
      focus: 'always',
      variants: [
        {
          label: 'ReviewsSkeleton Section (Product Page)',
          imports: `import ReviewsSkeleton from '/app/routes/products.$handle/sections/reviews'`,
          code: `<ReviewsSkeleton />`,
        },
      ],
    },
    Review: {
      component: Review,
      properties: {
        data: Utopia.objectControl({
          quote: Utopia.objectControl({
            value: Utopia.stringControl(),
          }),
          customer: Utopia.objectControl({
            value: Utopia.stringControl(),
          }),
          background: Utopia.radioControl([
            {
              label: 'white',
              value: 'white',
            },
            {
              label: 'accent',
              value: 'accent',
            },
            {
              label: 'black',
              value: 'black',
            },
          ]),
        }),
      },
      inspector: 'hidden',
      variants: [
        {
          label: 'Review with dummy data',
          imports: `import { Review } from '/app/routes/products.$handle/sections/reviews'`,
          code: `<Review data= {{
            id: '1',
            quote: {
              value: 'This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
            },
            customer: {
              value: 'Lynn W.',
            }
          }} />`,
        },
      ],
    },
    ReviewStatistics: {
      component: ReviewStatistics,
      properties: {
        average: {
          control: 'number-input',
          label: 'Average rating',
        },
        count: {
          control: 'number-input',
          label: 'Number of reviews',
        },
        icon: {
          control: 'jsx',
          preferredContents: {
            component: 'Star',
            moduleName: '/app/components/Star',
            variants: [],
          },
        },
      },
      focus: 'never',
      inspector: 'hidden',
      children: 'not-supported',
      variants: [
        {
          label: 'ReviewStatistics (Star icon)',
          imports: `import { ReviewStatistics } from '/app/routes/products.$handle/sections/reviews'
            import { Star } from '/app/components/Star'`,
          code: `<ReviewStatistics
            icon={<Star />}
            average={3.8}
            count={127}
          />`,
        },
        {
          label: 'ReviewStatistics (no icon)',
          imports: `import { ReviewStatistics } from '/app/routes/products.$handle/sections/reviews'`,
          code: `<ReviewStatistics
            average={3.8}
            count={127}
          />`,
        },
      ],
    },
  },
  '/app/routes/products.$handle/sections/spotlight': {
    Spotlight: {
      component: Spotlight,
      properties: {},
      inspector: 'hidden',
    },
  },
}

export default Components
