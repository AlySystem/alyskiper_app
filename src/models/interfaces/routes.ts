import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";

// Import types
import {
  PublicNavigatorParams,
  GuardsNavigatorParams
} from "src/models/types/routes";

// Import enums
import { AppRoute } from "src/models/enum/routes";

export interface WelcomeScreenProps {
  navigation: StackNavigationProp<
    PublicNavigatorParams,
    AppRoute.WELCOME_SCREEN
  >;
  route: RouteProp<PublicNavigatorParams, AppRoute.WELCOME_SCREEN>;
}

export interface SignInScreenProps {
  navigation: StackNavigationProp<
    PublicNavigatorParams,
    AppRoute.SIGNIN_SCREEN
  >;
  route: RouteProp<PublicNavigatorParams, AppRoute.SIGNIN_SCREEN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<
    PublicNavigatorParams,
    AppRoute.SIGNUP_SCREEN
  >;
  route: RouteProp<PublicNavigatorParams, AppRoute.SIGNUP_SCREEN>;
}

export interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<
    PublicNavigatorParams,
    AppRoute.RESET_PASSWORD_SCREEN
  >;
  route: RouteProp<PublicNavigatorParams, AppRoute.RESET_PASSWORD_SCREEN>;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<GuardsNavigatorParams, AppRoute.HOME_CREEN>;
  route: RouteProp<GuardsNavigatorParams, AppRoute.HOME_CREEN>;
}

export interface MapViewScreenProps {
  navigation: StackNavigationProp<
    GuardsNavigatorParams,
    AppRoute.MAPVIEW_SCREEN
  >;
  route: RouteProp<GuardsNavigatorParams, AppRoute.MAPVIEW_SCREEN>;
}
