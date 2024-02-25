import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link,
  Flex
} from '@chakra-ui/layout';
import Container from '@/layouts/container';
import * as tool from '@/data/tools';
import Icon from '@chakra-ui/icon';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { youtube, twitch, discord, twitter } from '@/data/socials';
import ContactForm from '@/components/contactForm';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useColorModeValue } from '@chakra-ui/color-mode';

const About = () => {
  return (
    <Container title="About | Akhil Chilumuru">
      <ContentWrapper>
        <Intro />
        <Skills />
        <Contact />
      </ContentWrapper>
    </Container>
  );
};

const Intro = () => {
  return (
    <Box as="section">
      <Heading mb="6.5rem" w={{ base: '90%', sm: '100%' }} as="h1" variant="h1">
        About
      </Heading>
      <Heading mb="0.5rem" as="h3" variant="h3">
        Background
      </Heading>
      <ChakraContainer maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
        <Text mb="2rem">
          Hey there! I’m Akhil, a passionate developer driven by the belief that technology
          holds the key to fostering a more equitable and inclusive society.
        </Text>
        <Text mb="2rem">
        Personal development fuels my mind, while organization keeps me on track. And when it's time to unwind, video games
        provide the perfect escape. Think of me as the the builder, and the friend who's always learning to build better things.
        </Text>
        <Text mb="6.5rem">
        Starting with the foundations at IIT Madras (Electrical Engineering, 2014-2018), 
        I transitioned to software development at Barclays Bank, where I spent four years building my skills. 
        But the pull of exploration led me back to academia, pursuing Computer Science at Texas A&M University (2022-2024). 
        This experience sparked a passion for deep learning, which I'm currently exploring in various backend projects.
        </Text>
        <Heading mb="0.5rem" as="h3" variant="h3">
          What I’ve been up to
        </Heading>
        <Text mb="2rem">
        My current focus is on building deep learning applications, pushing the boundaries of this powerful technology. 
        I'm also passionate about designing scalable systems that can handle growing complexity efficiently. Beyond
        development, I actively facilitate fellow researchers by guiding them on utilizing high-performance computing resources.
        </Text>
        <Text mb="2rem">
          Right now, I'm working on a project that uses deep learning to help authors create children's books by generating
          illustrations from text. 
        </Text>
        <Text mb="6.5rem">
          I'm also developing a scalable backend for serving the models using Redis and FastAPI. I'm also playing
          around with google's <em>Gemma 2B model</em> to see how it can help in generating illustrations by tuning prompts for <em>Diffusion</em> models.
        </Text>
        <Heading mb="0.5rem" as="h3" variant="h3">
          Interests
        </Heading>
        <Text mb="2rem">
          I’m currently interested in learning <em>LLMs</em> and building applications around LLMs. I'm also interested in
          distributed systems and how they can be used to build scalable and efficient systems.
        </Text>
        <Text mb="2rem">
          I’m also really into <em>System design</em> and{' '} I love to explore the
          tools and techniques that help to create more scalable and
          maintainable software.
        </Text>
        <Text mb="2rem">
          When I'm not coding (or writing or reading about it) you'll typically
          find me reading <em>Crucial Conversations</em> by <em>Grenny et al.</em> and <em>Atomic Habits</em> by <em>James Clear</em>.
        </Text>
        <Text>
          Although I love to keep myself busy with activities, I also make sure
          to set aside time to go for walks and runs, as
          well as taking some time out for self-reflection when I can.
        </Text>
      </ChakraContainer>
    </Box>
  );
};

const Skills = () => {
  // convert object properties to array for mapping
  const skills = Object.values(tool).slice(0, 12);
  return (
    <Box w="90%" alignSelf="center" as="section">
      <SectionHeading mb={{ base: '4rem', xl: '8rem' }}>
        Tools & Technologies
      </SectionHeading>
      <ChakraContainer
        maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}
        textAlign="center"
        p={0}
      >
        <Text mb="8rem">
        As a developer, I'm constantly on the lookout for tools that streamline my workflow and make my life easier.
        Here are a few of my current favorites.
        </Text>
      </ChakraContainer>
      <Grid
        m="auto"
        // w={{ md: '80%' }}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      p={{ base: '0.5rem', '2xl': '1rem' }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};

const Contact = () => {
  const { themed } = useColorModeSwitcher();
  return (
    <Box id="contact" p={{ base: '1rem', md: 0 }} as="section">
      <SectionHeading mb="4rem">Get in touch</SectionHeading>
      <Flex
        borderRadius="md"
        direction={{ base: 'column', xl: 'row' }}
        m="auto"
        p="4rem"
      >
        <ChakraContainer
          m={{ base: '0 0 4rem 0', xl: '0 4rem 0 0' }}
          maxW="20rem"
          p={0}
        >
          <Text mb="1rem" variant="preTitle">
            Let's chat!
          </Text>
          <Text mb="2rem">
            If you have any questions, opportunities or would just like to say
            hey then feel free to fill out my contact form and I'll endeavour to
            get back to you as soon as I can.
          </Text>
          {/* <Text>
            Or if you would prefer to, you can also reach me on{' '}
            <Link color={themed} href={twitter.href}>
              twitter
            </Link>{' '}
            {`and `}
            <Link color={themed} href={discord.href}>
              discord
            </Link>
            .
          </Text> */}
        </ChakraContainer>
        <ContactForm />
      </Flex>
    </Box>
  );
};

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};
export default About;
