import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT MODELS
// Import types
import { PublicNavigatorParams } from "../../models/types/routes";

// Import enums
import { AppRoute } from "../../../src/models/enum/routes";

// Import screens
import WelcomeScreen from "../../screens/public/WelcomeScreen";
import SignInScreen from "../../screens/public/SignInScreen";
import SignUpScreen from "../../screens/public/SignUpScreen";
import ResetPasswordScreen from "../../screens/public/ResetPasswordScreen";

const Stack = createStackNavigator<PublicNavigatorParams>();

export function PublicStack(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={AppRoute.SIGNIN_SCREEN} component={SignInScreen} />
      <Stack.Screen name={AppRoute.SIGNUP_SCREEN} component={SignUpScreen} />
      <Stack.Screen
        name={AppRoute.RESET_PASSWORD_SCREEN}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}
