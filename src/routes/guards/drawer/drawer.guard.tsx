import React, { ReactElement } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import MODELS
// Import types
import { GuardsNavigatorDrawerParams } from "../../../models/types/routes";

// Import enums
import { AppRoute } from "../../../models/enum/routes";

// Import screen
import HomeScreen from "../../../screens/guards/drawer/HomeScreen";
import ProfileScreen from "../../../screens/guards/drawer/ProfileScreen";

const Drawer = createDrawerNavigator<GuardsNavigatorDrawerParams>();

export function GuardDrawer(): ReactElement {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={AppRoute.HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={AppRoute.PROFILE_SCREEN} component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
