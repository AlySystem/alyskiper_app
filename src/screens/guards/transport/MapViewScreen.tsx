import React, { useState } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import MapView from "react-native-maps";

type RootStackList = {
  MapView: Props;
};

type Props = {
  navigation: StackNavigationProp<RootStackList, "MapView">;
};

const MapViewScreen = (props: Props) => {
  console.log(props);
  return (
    <View>
      <Text>MapView</Text>
    </View>
  );
};

export default MapViewScreen;
