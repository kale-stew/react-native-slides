import React, { Component } from "react";
import "./fonts.css";

import {
  Appear,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Slide,
  Text
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    black: "#272727",
    teal: "#30A7DB",
    navy: "#091540",
    offWhite: "#EFF4F9",
    green: "#26C145",
    orange: "#F04D20",
    primary: "#EFEFEF",
    white: "#fff"
  },
  {
    primary: "Fira Sans",
    secondary: "Montserrat",
    tertiary: "Space Mono"
  }
);

// image assets
const images = {
  CreateNative: require("./assets/create-react-native.png"),
  CreateReact: require("./assets/create-react-app.png"),
  FormidaLogo: require("./assets/new-formidable.png"),
  PlatformCode: require("./assets/platform-specific.png"),
  Questions: require("./assets/questions.png"),
  React: require("./assets/react.png"),
  ReactNative: require("./assets/react-native.png"),
  Roadmap: require("./assets/roadmap.png"),
  Wave: require("./assets/wave.png")
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["slide"]} theme={theme}>
        <Slide bgColor="teal">
          <Heading textColor="offWhite" fit={true}>
            React to React Native:
          </Heading>
          <Heading textColor="offWhite" fit={true}>
            <i>How Hard Could It Be?</i>
          </Heading>
          <br />
          <br />
          <Image src={images.FormidaLogo} height="110px" />
          <br />
          <Heading textFont="Montserrat" textColor="navy" size={6}>
            Kylie Stewart
          </Heading>
          <Heading textFont="Montserrat" textColor="navy" size={6}>
            Software Engineer at Formidable
          </Heading>
        </Slide>

        <Slide bgColor="teal">
          <Layout>
            <Fill>
              <Image src={images.Wave} width="330px" />
            </Fill>
            <Fill>
              <Heading fit={true} textColor="offWhite">
                Kylie Stewart
              </Heading>
              <br />
              <Heading size={4} textColor="offWhite">
                Software Engineer
              </Heading>
              <Heading size={4} textColor="offWhite">
                at Formidable
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        {/** WHAT IS REACT */}
        <Slide bgColor="teal">
          <Heading size={3} textColor="offWhite">
            What is React?
          </Heading>
          <br />
          <Image src={images.React} width="330px" />
        </Slide>

        {/** WHY REACT */}
        <Slide bgColor="teal">
          <Heading size={4} textColor="offWhite">
            But why use it?
          </Heading>
          <br />
          <Appear>
            <Text textColor="offWhite">open source</Text>
          </Appear>
          <Appear>
            <Text textColor="offWhite">JSX</Text>
          </Appear>
          <Appear>
            <Text textColor="offWhite">virtual DOM</Text>
          </Appear>
          <Appear>
            <Text textColor="offWhite">component interfaces</Text>
          </Appear>
        </Slide>

        {/** WHAT IS REACT NATIVE */}
        <Slide bgColor="teal">
          <Heading fit={true}>What is React Native?</Heading>
          <br />
          <Image src={images.ReactNative} height="330px" />
        </Slide>

        {/** WHY REACT NATIVE */}
        <Slide bgColor="teal">
          <Heading size={4} textColor="offWhite">
            The dream 🙌
          </Heading>
          <br />
          <Appear>
            <Heading textColor="offWhite">
              <i>Build once,</i>
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="offWhite">
              <i>deploy anywhere</i>
            </Heading>
          </Appear>
        </Slide>

        {/** CHALLENGES */}
        <Slide bgColor="navy">
          <Heading fit={true}>How hard could it be?</Heading>
          <br />
          <Image
            src={
              "https://media0.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif?cid=790b76110b82aa6e243f8984f528c0811b36b543f9d9e2e0&rid=giphy.gif"
            }
          />
        </Slide>

        <Slide bgColor="green">
          <Heading fit={true}>Getting Started with React</Heading>
          <br />
          <Image src={images.CreateReact} height="150px" />
        </Slide>

        <Slide bgColor="green">
          <Heading fit={true}>Getting Started with React Native</Heading>
          <br />
          <Image src={images.CreateNative} height="150px" />
        </Slide>

        <Slide bgColor="orange">
          <Heading fit={true} textColor="offWhite">
            Challenge #1: Syntax 📚
          </Heading>
          <br />
          <Appear>
            <Heading size={4} textColor="offWhite">
              d̶i̶v̶ View
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              b̶u̶t̶t̶o̶n̶s̶ touchables
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              o̶n̶C̶l̶i̶c̶k̶ onPress
            </Heading>
          </Appear>
        </Slide>

        {/** STYLES  */}
        <Slide bgColor="green">
          <Heading fit={true} textColor="offWhite">
            Challenge #2: Styles 💅🏻
          </Heading>
          <br />
          <Appear>
            <Heading size={4} textColor="offWhite">
              inline styles
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              flexbox everything
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              font trickery
            </Heading>
          </Appear>
        </Slide>

        {/** INFRASTRUCTURE */}
        <Slide bgColor="teal">
          <Heading fit={true} textColor="offWhite">
            Challenge #3: Infrastructure 🛠
          </Heading>
          <br />
          <Appear>
            <Heading size={4} textColor="offWhite">
              l̶o̶c̶a̶l̶S̶t̶o̶r̶a̶g̶e̶ AsyncStorage
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              offline accessibility
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              ... and don't forget about the app store!
            </Heading>
          </Appear>
        </Slide>

        {/** NATIVE BINDINGS */}
        <Slide bgColor="navy">
          <Heading fit={true} textColor="offWhite">
            Challenge #4: Native Bindings 📲
          </Heading>
          <br />
          <Appear>
            <Image src={images.PlatformCode} height="450px" />
          </Appear>
        </Slide>

        {/** THE FUTURE */}
        <Slide bgColor="green">
          <Heading size={4} textColor="offWhite">
            ✨ The Future ✨
          </Heading>
          <br />
          <br />
          <Appear>
            <Heading size={1} textColor="offWhite">
              <i>Fabric</i>
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="green">
          <Heading size={2} textColor="offWhite">
            Fabric
          </Heading>
          <br />
          <br />
          <Appear>
            <Heading size={4} textColor="offWhite">
              new threading model
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              async rendering
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="offWhite">
              simplified native bridge
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="green">
          <Image src={images.Roadmap} />
        </Slide>

        <Slide bgColor="orange">
          <Layout>
            <Fill>
              <Image src={images.Questions} width="330px" />
            </Fill>
            <Fill>
              <br />
              <br />
              <Heading size={2} textColor="offWhite">
                Any questions?
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        {/** FIN */}
        <Slide bgColor="orange">
          <Heading>THANK YOU!</Heading>
          <br />
          <br />
          <Heading textFont="Montserrat" textColor="white" size={5}>
            @KYLIESTEW ON TWITTER
          </Heading>
          <br />
          <Code style={{ color: "white" }}>
            kyliestewart.tech/react-native-slides
          </Code>
        </Slide>
      </Deck>
    );
  }
}
