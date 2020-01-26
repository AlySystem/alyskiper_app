import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT MODELS
// Import types
import { PublicNavigatorParams } from "src/models/types/routes";

// Import enums
import { AppRoute } from "src/models/enum/routes";

// Import screens
import WelcomeScreen from "src/screens/public/WelcomeScreen";
import SignInScreen from "src/screens/public/SignInScreen";
import SignUpScreen from "src/screens/public/SignUpScreen";
import ResetPasswordScreen from "src/screens/public/ResetPasswordScreen";

const Stack = createStackNavigator<PublicNavigatorParams>();

export function GuardsStack(): ReactElement {
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
