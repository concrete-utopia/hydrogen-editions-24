import {Container, Section, Background, Grid, Flex} from '@h2/new/Layout';
import {Heading, Text} from '@h2/new/Text';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function HighlightDetails() {
  const {details} = useLoaderData();

  const {highlights} = JSON.parse(details.features.reference.content.value);

  return (
    <Section className="items-center text-white py-44 bg-darkGray">
      <Container resizeY="fill">
        <Grid resizeY="fill">
          <Flex resizeY="fill" justify="center" direction="down" gap={9}>
            {highlights.map((highlight) => (
              <Flex direction="down" gap={5} key={highlight.title}>
                <Heading font="text" size={4} color="white">
                  {highlight.title}
                </Heading>
                <Flex as="ul" gap={2} direction="down">
                  {highlight.listItems.map((item) => (
                    <Flex
                      key={item}
                      gap={4}
                      as="li"
                      className="flex items-center"
                    >
                      <span className="bg-accent inline-block w-10 h-[2px]" />
                      <Text size="xl" color="white" className="opacity-70">
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Grid>
      </Container>
      <Background columns={2}>
        <div className="w-full h-full"></div>
        <div className="w-full h-full bg-accent">
          <Image
            className="w-full h-full"
            data={details.features.reference.image.reference.image}
          />
        </div>
      </Background>
    </Section>
  );
}
