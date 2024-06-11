import Link from '@h2/Link'
import { Heading, Span } from '@h2/new/Text'
import {
  Background,
  Container,
  Row,
  Grid,
  Section,
} from '@h2/new/Layout'

export default function Collections() {
  return (
    <Grid
      gap={0}
      as='section'
      justify='stretch'
      rows={2}
      className='bg-accent -mt-[28rem] bg-gradient-to-b from-white to-accent to-50%'
      style={{ width: '100%' }}
    >
      <Row
        resizeY='fill'
        align='end'
        justify='center'
        as='header'
        className='pb-32'
      >
        <Heading
          font='text'
          uppercase
          align='center'
          weight='regular'
          size={6}
        >
          <Span className='relative inline-block scale-90'>
            Something
          </Span>
          <br />
          <Span
            font='display'
            className='drop-shadow-[-0.1em_0_0_white]'
          >
            For Everyone
          </Span>
        </Heading>
      </Row>
      <Section>
        <Container className='aspect-[20/7] px-0 lg:px-0'>
          <Grid
            rows={9}
            columns={12}
            className='absolute w-full max-w-7xl bottom-0 aspect-[20/7] -translate-y-8'
          >
            <Link className='col-span-2 col-start-3 row-start-4'>
              <Grid
                className='relative items-center justify-center'
                columns={1}
                rows={1}
              >
                <Heading
                  font='text'
                  align='center'
                  size={6}
                  weight='regular'
                  className='absolute z-20 col-span-1 col-start-1 row-span-1 row-start-1 text-center -translate-x-1/2 left-1/2'
                >
                  Apparel
                </Heading>
                <ApparelBlob className='col-span-1 col-start-1 row-span-1 row-start-1' />
              </Grid>
            </Link>
            <Link className='col-span-2 col-start-5 row-start-7'>
              <Grid
                className='items-center justify-center'
                columns={1}
                rows={1}
              >
                <Heading
                  font='text'
                  align='center'
                  size={6}
                  weight='regular'
                  className='z-20 col-span-1 col-start-1 row-span-1 row-start-1 text-center'
                >
                  Bags
                </Heading>
                <BagsBlob className='col-span-1 col-start-1 row-span-1 row-start-1' />
              </Grid>
            </Link>
            <Link className='col-span-2 col-start-8 row-start-3'>
              <Grid
                className='items-center justify-center'
                columns={1}
                rows={1}
              >
                <Heading
                  font='text'
                  align='center'
                  size={6}
                  weight='regular'
                  className='z-10 col-span-1 col-start-1 row-span-1 row-start-1 text-center'
                >
                  Tech
                </Heading>
                <TechBlob className='col-span-1 col-start-1 row-span-1 row-start-1' />
              </Grid>
            </Link>
            <Link className='col-span-2 col-start-10 row-start-6'>
              <Grid
                className='items-center justify-center'
                columns={1}
                rows={1}
              >
                <Heading
                  font='text'
                  align='center'
                  size={6}
                  weight='regular'
                  className='z-10 col-span-1 col-start-1 row-span-1 row-start-1 text-center'
                >
                  Misc
                </Heading>
                <MiscBlob className='col-span-1 col-start-1 row-span-1 row-start-1' />
              </Grid>
            </Link>
          </Grid>
        </Container>
        <Background overflow='visible'>
          <Globe className='absolute bottom-0 w-full px-8 -translate-x-1/2 max-w-7xl left-1/2' />
        </Background>
      </Section>
    </Grid>
  )
}

function Globe({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 1222 459'
      className={className}
    >
      <path
        fill='#000'
        fillRule='evenodd'
        d='M112.2 459c13.5-7.7 28-15 43.2-22 9.2-37.2 21-72.9 34.9-106.6a609.7 609.7 0 0 0-27 16.4A469.8 469.8 0 0 0 39.9 459h-2.5a472 472 0 0 1 124.8-113.9c9.5-6.1 19.3-12 29.3-17.8a653.8 653.8 0 0 1 94.1-158.6C158.6 234 60.6 336.7 12 459H9.8c49.3-124.4 149.4-228.5 279-294.2 71.6-86 162.9-144 264-160.1A633.6 633.6 0 0 0 2.7 459h-2a635.3 635.3 0 0 1 1220.6 0h-2a633.6 633.6 0 0 0-550-454.3c101 16.2 192.3 74 263.9 160 129.6 65.8 229.7 170 279 294.3h-2.1c-48.7-122.2-146.8-224.9-273.7-290.3a653.9 653.9 0 0 1 94.1 158.7c10 5.7 19.8 11.6 29.3 17.7A471 471 0 0 1 1184.7 459h-2.5A470 470 0 0 0 1059 346.8a609.2 609.2 0 0 0-27-16.4 758.5 758.5 0 0 1 34.8 106.5c15.2 7 29.7 14.4 43.2 22.1h-4c-12.2-6.8-25-13.3-38.6-19.6 1.6 6.5 3.1 13 4.5 19.6h-2c-1.5-7-3.1-13.8-4.8-20.7l-6-2.7a854.8 854.8 0 0 0-147.8-49.2c5.1 23.5 9.5 47.8 13.2 72.6h-2c-3.7-25-8.2-49.4-13.4-73A1197.4 1197.4 0 0 0 758 360.3c3.8 31.5 7 64.5 9.6 98.6h-2c-2.5-34.2-5.8-67.3-9.7-98.9a1396.2 1396.2 0 0 0-289.5 0 2036 2036 0 0 0-9.7 98.9h-2a2038 2038 0 0 1 9.6-98.6c-53.3 5.6-104 14.3-151.1 25.5-5.2 23.7-9.7 48-13.4 73.1h-2c3.7-24.8 8.1-49 13.2-72.6a854.7 854.7 0 0 0-153.8 52c-1.7 6.8-3.3 13.7-4.8 20.6h-2c1.4-6.6 2.9-13.1 4.5-19.6a578.1 578.1 0 0 0-38.5 19.6h-4.1Zm45.5-23.1a748.6 748.6 0 0 1 35.4-107.2 736.3 736.3 0 0 1 153.1-64.2 917.2 917.2 0 0 0-34.8 119.8 857.8 857.8 0 0 0-153.7 51.6Zm36.7-110.2c45.6-25.6 97-47 152.7-63.5 10-27 21.2-52.4 33.2-76a533.2 533.2 0 0 1 43-70.5A685.8 685.8 0 0 0 290 166.4a650.8 650.8 0 0 0-95.7 159.4Zm119.2 58a912.8 912.8 0 0 1 35-119.9c43-12.6 88.4-22.2 135.9-28.4-7.8 37.6-14.6 78.9-20 123a1200.5 1200.5 0 0 0-151 25.3Zm35.9-122.2a901 901 0 0 1 135.4-28.2c3.4-16.3 7-32 10.8-46.8a694 694 0 0 1 28.9-90 725 725 0 0 0-98.2 18.4 528.5 528.5 0 0 0-44.3 72.3 706.8 706.8 0 0 0-32.6 74.3Zm117 96.6a1541 1541 0 0 1 20-123 977.4 977.4 0 0 1 249 0 1542 1542 0 0 1 20 123 1398.4 1398.4 0 0 0-289 0Zm144.6-132.9c42.4 0 83.9 2.7 124 7.8-3.3-16-6.9-31.4-10.6-46a689 689 0 0 0-29.2-90.8 742.6 742.6 0 0 0-168.4 0 689 689 0 0 0-29.2 90.8c-3.8 14.6-7.3 30-10.7 46 40.1-5 81.6-7.8 124-7.8Zm146.5 133.1c-5.4-44-12.2-85.3-20-123a909 909 0 0 1 136 28.5 913.1 913.1 0 0 1 35 120 1199.3 1199.3 0 0 0-151-25.5Zm-20.4-125a895.7 895.7 0 0 1 135.4 28.2 707.8 707.8 0 0 0-32.6-74.3 528.5 528.5 0 0 0-44.2-72.3 719.4 719.4 0 0 0-98.3-18.4 694 694 0 0 1 28.9 90c3.8 14.9 7.4 30.5 10.8 46.8Zm173.5 151c-9.4-42.5-21-82.7-34.8-119.8a736.4 736.4 0 0 1 153 64.2 744 744 0 0 1 35.5 107.2l-4.6-2.1a857.9 857.9 0 0 0-149.1-49.5ZM875 262.2c55.7 16.4 107 38 152.7 63.5A650.7 650.7 0 0 0 932 166.4a685.8 685.8 0 0 0-133.2-50.7 533.3 533.3 0 0 1 43 70.6 711 711 0 0 1 33.2 75.9Zm-449.8-149a689.1 689.1 0 0 0-131.9 49.3c76.2-90 174.2-148.2 282.2-158.8-55.6 11.8-106.8 50.6-150.3 109.5Zm3-.8C476.5 47.9 534 8.3 596 2.7c-17.3 6.1-33.6 22.7-48.7 47.6a331.2 331.2 0 0 0-21.7 44c-33.3 3.9-65.8 10-97.3 18Zm120.8-61A327.1 327.1 0 0 0 527.7 94a744.5 744.5 0 0 1 166.7 0 327.2 327.2 0 0 0-21.2-42.8C653.8 19.3 632.8 2 611 2c-21.8 0-42.8 17.3-62.1 49.3Zm244.9 61c-31.5-8.1-64-14.2-97.2-18-7-16.8-14.3-31.5-21.8-44-15-25-31.4-41.6-48.7-47.7 62 5.6 119.5 45.2 167.7 109.7Zm3 .8C753.5 54.3 702.2 15.5 646.6 3.7c108 10.6 206 68.7 282.2 158.8a689.1 689.1 0 0 0-131.9-49.3Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function ApparelBlob({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 158 147'
      className={className}
    >
      <path
        fill='#fff'
        d='M27 32c9-2 16.9-7.5 21.8-15a36.5 36.5 0 0 1 60.3-.2c5 7.5 12.7 12.9 21.8 15 25.6 5.8 35.7 35.2 18.7 54.4-6 6.7-9 15.4-8.3 24.2 2 25-24.4 43.2-48.8 33.8a37.3 37.3 0 0 0-26.9 0c-24.3 9.6-50.7-8.5-48.8-33.4.7-8.8-2.3-17.5-8.4-24.3-17-19-7-48.4 18.6-54.5Z'
      />
    </svg>
  )
}

function BagsBlob({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 211 131'
      className={className}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M57.2 131h95.5v-11.8h19.1v-11.8H191V83.7h19V48.3h-19V24.6h-19.2V12.8h-19.1V1H57.2v11.8h-19v11.8H19v23.7H0v35.4h19v23.7h19.1v11.8h19.1V131Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
function TechBlob({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 213 154'
      className={className}
    >
      <path
        fill='#fff'
        d='M.6 76c-.8.5-.8 1.4 0 1.9L24.2 91c.6.3.8.9.5 1.3L12.3 112c-.4.7.1 1.5 1.2 1.6l29.4 3.8c.7.1 1.2.5 1.3 1l1.7 21.5c0 .8 1 1.3 2 1l28.5-6.4c.7-.2 1.5 0 1.8.5l15.4 18.4c.5.7 1.7.8 2.5.2l21-15.2a2 2 0 0 1 2-.2l25.5 11.2c.9.4 2 0 2.3-.6l8.8-20.6c.2-.5.9-.8 1.6-.8l29.8 1.4c1 0 1.9-.6 1.7-1.4l-5.5-21c-.2-.6.2-1.1.9-1.3l27.3-8.8c1-.3 1.2-1.2.6-1.7l-18.5-17a.8.8 0 0 1 0-1.3L212 59.4c.6-.6.3-1.4-.6-1.7l-27.3-8.8c-.7-.2-1-.7-1-1.2l5.6-21.2c.2-.7-.6-1.4-1.7-1.3l-29.8 1.4c-.7 0-1.4-.3-1.6-.8l-8.8-20.6c-.3-.7-1.4-1-2.3-.6L119 15.8a2 2 0 0 1-2-.2L96.1.3c-.8-.5-2-.4-2.5.2L78.2 19c-.3.5-1 .7-1.8.5L48 13c-1-.2-2 .3-2 1l-1.7 21.5c0 .5-.6 1-1.3 1l-29.4 3.9c-1 0-1.6.9-1.2 1.6l12.4 19.5c.3.5 0 1-.5 1.4L.6 76Z'
      />
    </svg>
  )
}
function MiscBlob({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 174 148'
      className={className}
    >
      <path
        fill='#fff'
        d='M14.7 61.7 54.3 74 15 86.1c-3 .9-6 2.2-8.3 4a17.4 17.4 0 0 0-5.2 6.2A13.3 13.3 0 0 0 3 110.8c1.7 2.1 4 4 6.6 5.4a27.2 27.2 0 0 0 18.8 2.5c3.2-.6 6.2-1.8 8.7-3.4l33.8-20-6 32a13 13 0 0 0 .4 7.4c.9 2.4 2.4 4.6 4.5 6.6 2.1 1.9 4.8 3.4 7.8 4.5a28.7 28.7 0 0 0 19 0c3-1 5.7-2.6 7.8-4.5 2.2-2 3.7-4.2 4.5-6.6.9-2.5 1-5 .4-7.4l-6-32.2 33.6 19.8c2.5 1.7 5.5 2.8 8.7 3.5a29.5 29.5 0 0 0 18.8-2.5 20 20 0 0 0 6.6-5.4c1.6-2.2 2.6-4.6 3-7.1.2-2.5-.2-5-1.4-7.4a18 18 0 0 0-5.2-6.2 24.4 24.4 0 0 0-8.3-4l-39.7-12.2 39.4-12.2c3-1 5.7-2.3 7.8-4a17 17 0 0 0 5-6.2c1-2.3 1.4-4.7 1-7.2a13 13 0 0 0-2.8-6.8 20 20 0 0 0-6.4-5.3 29.6 29.6 0 0 0-26.7.4l-33.8 20 6-32a15 15 0 0 0-.9-7.2c-.9-2.3-2.4-4.4-4.5-6.3a23.1 23.1 0 0 0-7.6-4.3 28.7 28.7 0 0 0-18.5 0c-3 1-5.5 2.5-7.6 4.3a17 17 0 0 0-4.6 6.3 12 12 0 0 0-.7 7.2l5.9 32.2-33.6-19.9a29.6 29.6 0 0 0-26.7-.4 20 20 0 0 0-6.4 5.3 14.4 14.4 0 0 0-2.9 6.8c-.3 2.5.1 4.9 1.2 7.2a17 17 0 0 0 4.9 6.1c2.1 1.8 4.8 3.2 7.8 4.1Z'
      />
    </svg>
  )
}
