import React from "react";
import { View, Text } from "react-native";

// Import models
import { WelcomeScreenProps } from "src/models/interfaces/routes";

const WelcomeScreen = (props: WelcomeScreenProps) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;
