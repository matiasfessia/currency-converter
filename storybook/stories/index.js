import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import { withKnobs } from "@storybook/addon-ondevice-knobs";
// import { text, select } from "@storybook/addon-knobs";
import { text } from "@storybook/addon-knobs";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF",
};

/*
const label = 'Colors';
const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null,
};
const defaultValue = 'red';
*/

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("CenteredView", module)
  .addDecorator(withKnobs)
  .add("default view", () => (
    <CenteredView>
      {/* <Text style={{color: select(label, options, defaultValue)}}>{text("Welcome text", "Hello Storybook :)")}</Text> */}
      <Text>{text("Welcome text", "Hello Storybook :)")}</Text>
    </CenteredView>
  ));
