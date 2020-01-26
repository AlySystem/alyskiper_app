import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT MODELS
// Import types
import { GuardsNavigatorParams } from "../../../models/types/routes";
// Import enums
import { AppRoute } from "../../../models/enum/routes";

// Import screens
import MapViewScreen from "../../../screens/guards/transport/MapViewScreen";

// Drawer
import { GuardDrawer } from "../drawer/drawer.guard";

const Stack = createStackNavigator<GuardsNavigatorParams>();

export function GuardsStack(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.MAPVIEW_SCREEN} component={MapViewScreen} />
      <Stack.Screen name={AppRoute.HOME_SCREEN} component={GuardDrawer} />
    </Stack.Navigator>
  );
}
