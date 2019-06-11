
import React, { Component } from 'react';
import './fonts.css';
import * as codeSamples from './code-samples.js';
//import SwitchComponent from './SwitchComponent';

// spectacle-core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Slide,
  Text
} from 'spectacle';

// theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    black: '#272727',
    greyPearl: '#3D518C',
    navy: '#091540',
    offWhite: '#EFF4F9',
    orange: '#F04D22',
    periwinkle: '#7692FF',
    primary: '#EFEFEF',
    teal: '#ABD2FA',
    white: '#fff'
  },
  {
    primary: 'Fira Sans',
    secondary: 'Montserrat',
    tertiary: 'Space Mono'
  }
);

// image assets
/* eslint-disable no-undef */
const images = {
  Clippy: require('./assets/clippy.jpg'),
  ClippyTweet: require('./assets/clippy-tweet.jpg'),
  CityblockLogo: require('./assets/cityblock.svg'),
  Intellisense: require('./assets/intellisense.gif'),
  OtherGirl: require('./assets/the-other-girl.jpg'),
  Refactor: require('./assets/refactoring.png'),
  TSWithReact: require('./assets/react-with-ts.png'),
  VSCode: require('./assets/vs-code.png'),
  Warning: require('./assets/warning.png'),
  OnAndOff: require('./assets/OnAndOff.jpg')
};
/* eslint-enable no-undef */

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        <Slide bgColor="#0055ff">
          <Heading textColor="offWhite" fit={true}>
            Using TypeScript in React:
          </Heading>
          <Heading textColor="offWhite" fit={true}>
            <br/>
            <i>⚓️ Hooks Edition ⚓️</i>
          </Heading>
          <br />
          <br />
          <Image src={images.CityblockLogo} height="110px" />
          <br />
          <Heading textFont="Montserrat" textColor="#ffffff" size={6}>
            Jay Bhagat, Software Engineer at Cityblock
          </Heading>
        </Slide>

        {/** WHAT'S TYPESCRIPT? */}
        <Slide bgColor="#0055ff">
          <Heading textColor="offWhite">What is TypeScript, exactly?</Heading>
            <List textColor="#ffffff">
              <ListItem>A superset of JS</ListItem>
              <ListItem>Provides optional static type checking</ListItem>
              <ListItem>Designed for large scale, robust applications</ListItem>
              <ListItem>Compiles down to JavaScript</ListItem>
              <ListItem>Type checks every time you compile and ever variable must be declared.</ListItem>
            </List>
        </Slide>

        <Slide bgColor="#0055ff">
          <Heading textColor="offWhite" fit={true}>
            Have you ever done this?
          </Heading>
          <Image src={images.Refactor} height="400px" />
        </Slide>

        <Slide bgColor="#0055ff">
          <Heading textColor="offWhite" fit={true}>
            Or have someone try to tell you this?
          </Heading>
          <Image src={images.OnAndOff} />
        </Slide>


        {/* <Slide bgColor="periwinkle">
            <SwitchComponent/>
        </Slide> */}

        <Slide bgColor="#004488">
          <Heading textColor="offWhite" fit={true}>What are some other things to know before we get started?</Heading>
            <List textColor="offWhite">
              <ListItem>Interfaces</ListItem>
              <ListItem>TypeScript Suggestions</ListItem>
            </List>
        </Slide>

        <Slide bgColor="#004488">
          <Heading textColor="offWhite">Interfaces</Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.typescriptButton}
              theme="light"
            />
          </Appear>
          <Notes>
            <List>
              <ListItem>A contract for your component</ListItem>
              <ListItem>will warn you if prop is missing, wrong type</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="#004488">
          <Heading textColor="offWhite" fit={true}>
            Let's compare this to PropTypes
          </Heading>
          <br />
          <Layout>
          </Layout>
            <ListItem textColor="offWhite">
              TS lets you statically type your entire codebase
            </ListItem>
            <ListItem textColor="offWhite">
              PropTypes only validate on a component-level in dev
            </ListItem>
        </Slide>

        <Slide bgColor="#004488">
          <Heading textColor="offWhite" size={3}>
            Extending Interfaces
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={codeSamples.userDataInterface}
                theme="light"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  source={codeSamples.extendedUserDataInterface}
                  theme="light"
                />
              </Fill>
            </Appear>
          </Layout>
          <Notes>
            <List>
              <ListItem>Can be shared and extended upon</ListItem>
              <ListItem>HOC Patterns</ListItem>
              <ListItem>
                A component that wraps another component for the sake of
                extending props to it
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="#004488">
        <Heading textColor="offWhite" fit={true}>
            IntelliSense
          </Heading>
          <Image src={images.Intellisense} width="800" />
          <Notes>Automatic Type Acquisition</Notes>
        </Slide>

        <Slide bgColor="#004488">
        <Heading textColor="offWhite" fit={true}>
            It's Basically Clippy
          </Heading>

            <Image src={images.Clippy} height="200px" />
        </Slide>

        {/** Guides */}
        <Slide bgColor="offWhite">
          <Heading size={3} textColor="periwinkle">
            <i>Helpful Guides</i>
          </Heading>
          <br />

          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://www.udemy.com/course/understanding-typescript/
        </Text>
          <br />
          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
          https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
          </Text>
          <br />
          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://basarat.gitbooks.io/typescript
          </Text>
          <br />
          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://www.youtube.com/watch?v=iBlGIS-UQsw
          </Text>
        </Slide>

        {/* Hooks */}
        <Slide bgColor="offWhite">
          <Heading size={3} textColor="periwinkle">
            <i>Now, let's dive into hooks!</i>
          </Heading>
        </Slide>

        {/* useState, useEffect */}
        <Slide bgColor="#0055ff">
          <Heading textColor="offWhite" fit={true}>Basic Hooks</Heading>
            <List textColor="offWhite">
              <ListItem>useState</ListItem>
              <ListItem>useEffect</ListItem>
            </List>
        </Slide>

        <Slide bgColor="#0055ff">
            <Layout>
                <Fill>
                <CodePane
                    source={codeSamples.oldReactComponent}
                    theme="light"
                />
                </Fill>
                <Appear>
                <Fill>
                    <CodePane
                    source={codeSamples.newReactComponent}
                    theme="light"
                    />
                </Fill>
                </Appear>
            </Layout>
          </Slide>

          <Slide bgColor="#0055ff">
            <Heading textColor="offWhite">useState</Heading>
            <Layout>
                <Fill>
                <CodePane
                    source={codeSamples.implicitState}
                    theme="light"
                />
                </Fill>
                <Appear>
                <Fill>
                    <CodePane
                    source={codeSamples.explicitState}
                    theme="light"
                    />
                </Fill>
                </Appear>
            </Layout>
          </Slide>

          <Slide bgColor="#0055ff">
            <Heading textColor="offWhite">useEffect</Heading>
            <Layout>
                <Fill>
                <CodePane
                    source={codeSamples.useEffect}
                    theme="light"
                />
                </Fill>
            </Layout>
            <Appear>
                <Fill>
                    <CodePane
                    source={codeSamples.useEffectExample}
                    theme="light"
                    />
                </Fill>
                </Appear>
          </Slide>


        {/** FIN */}
        <Slide bgColor="#004488">
          <Heading>FIN</Heading>
          <br />
          <br />
          <Code style={{ color: 'white' }}>
            @imShahrukhDon
            </Code>
        </Slide>
      </Deck>
    );
  }
}