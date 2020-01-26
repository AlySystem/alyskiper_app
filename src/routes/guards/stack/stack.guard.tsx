import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT MODELS
// Import types
import { GuardsNavigatorParams } from "src/models/types/routes";
// Import enums
import { AppRoute } from "src/models/enum/routes";

// Import screens
import MapViewScreen from "src/screens/guards/transport/MapViewScreen";
import HomeScreen from "src/screens/guards/HomeScreen";

const Stack = createStackNavigator<GuardsNavigatorParams>();

export function GuardsStack(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.HOME_CREEN} component={HomeScreen} />
      <Stack.Screen name={AppRoute.MAPVIEW_SCREEN} component={MapViewScreen} />
    </Stack.Navigator>
  );
}
