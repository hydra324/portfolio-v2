import { Logo } from '@/components/svg/logo';
import { MagicMirrorLogo } from '@/components/svg/mmLogo';
import {
  react,
  python,
  docker,
  pytorch,
  fastapi,
  angular,
  tensorflow,
  django,
  postgres,
  flask,
  pandas,
  plotly
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    logo: null,
    title: 'Storybook Generator',
    description:
      'Create storybooks without worrying about the visual art',
    tools: [react, python, docker, pytorch, fastapi],
    live: 'https://storybook-generator-web.vercel.app/',
    proto: null,
    repo: 'https://github.com/hydra324/storybook-server/',
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'Sign Language Detector',
    description:
      'A simple application to detect American Sign Language',
    tools: [angular, python, docker, tensorflow],
    live: 'https://asl-demo.herokuapp.com/',
    proto: null,
    repo: 'https://github.com/hydra324/asl-app',
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'BitBid',
    description:
      'A Crypto Currency Auction Platform',
    tools: [python, docker, django, postgres],
    live: '',
    proto: null,
    repo: '',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'Development Visualizer',
    description:
      'Learn how education impacts development in different countries',
    tools: [react, python, flask, pandas, plotly],
    live: 'https://data-viz-react-js.vercel.app/',
    proto: null,
    repo: 'https://github.com/hydra324/Data-Viz-React-Js',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'FairGraph',
    description:
      'Fairness in Graph Neural Networks',
    tools: [python, pytorch],
    live: '',
    proto: null,
    repo: 'https://github.com/divelab/DIG',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'Low powered Image Classifier',
    description:
      'A Wide ResNet inspired image classifier for low powered devices',
    tools: [python, pytorch],
    live: '/report.pdf',
    proto: null,
    repo: 'https://github.com/hydra324/wide-resnet-LN-GS',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'FinLit',
    description:
      'A recommendation system for financial literacy videos',
    tools: [python, pytorch, postgres, flask],
    live: '',
    proto: null,
    repo: 'https://github.com/hydra324/recommender-sys',
    id: uuidv4(),
    feature: false
  }
  // {
  //   logo: <Logo />,
  //   title: 'Portfolio V2',
  //   description:
  //     'This site! Building the second iteration of my personal portfolio, being live-documented on Twitch and Youtube.',
  //   tools: [react, nextjs, storybook, figma],
  //   live: null,
  //   proto: null,
  //   repo: 'https://github.com/gregogun/portfolio-v2',
  //   id: uuidv4(),
  //   feature: false
  // },
  // {
  //   logo: <MagicMirrorLogo />,
  //   title: 'Magic Mirror (React)',
  //   description:
  //     'An IoT project inspired by the original Magic Mirror by Michael Teeuw. Having no experience with Angular, it seemed like a good oppoertunity to build with React!',
  //   tools: [react, electron, nodejs, socketIO],
  //   live: null,
  //   proto:
  //     'https://www.figma.com/proto/miwkYYZhCHXaGtNZ2O13bb/MyMagicMirror---UI?page-id=210%3A1&node-id=205%3A116&viewport=194%2C368%2C0.16894406080245972&scaling=scale-down',
  //   repo: 'https://github.com/gregogun/magic-mirror-react',
  //   id: uuidv4(),
  //   feature: true
  // },
  // {
  //   logo: <Logo />,
  //   title: 'Portfolio V1',
  //   description:
  //     'The first iteration of my personal portfolio built with React and Chakra UI.',
  //   tools: [react, chakra],
  //   live: 'https://gregogun.netlify.app/',
  //   prototype: null,
  //   repo: 'https://github.com/gregogun/portfolio-v1',
  //   id: uuidv4(),
  //   feature: false
  // },
  // {
  //   logo: null,
  //   title: 'gitjobs',
  //   description:
  //     'A job board built with the Github Jobs API, with reimagined design and functionality.',
  //   tools: [react, chakra],
  //   live: 'https://go-gitjobs.netlify.app/',
  //   proto: null,
  //   repo: 'https://github.com/gregogun/my-guestbook',
  //   id: uuidv4(),
  //   feature: false
  // }
];
