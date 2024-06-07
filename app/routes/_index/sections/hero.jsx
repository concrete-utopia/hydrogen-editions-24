import {Button} from '@h2/new/Button';
import {Heading, Text, Span} from '@h2/new/Text';
import {Background, Container, Flex, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  return (
    <Section className="h-svh max-h-[64rem] bg-darkGray">
      <Container resizeY="fill" className="pb-24 pt-36">
        <Flex direction="down" resizeY="fill" justify="between" align="start">
          <Flex direction="down" gap="s" justify="center" className="pt-[10vh]">
            <Text
              uppercase
              size={6}
              font="display"
              color="accent"
              className="pl-1"
            >
              Summer 2024
            </Text>
            <Heading font="text" size="8" color="white">
              Building <br />
              <Span uppercase font="display">
                Essentials
              </Span>
            </Heading>
          </Flex>
          <Button to="/products/builder-tote">Shop now</Button>
        </Flex>
      </Container>
      <Background columns={2}>
        <div></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-darkGray to-transparent to-50% z-0"></div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/home-hero.jpg?v=1716832320"
            className="object-cover w-full h-full -z-10"
          />
        </div>
      </Background>
    </Section>
  );
}
