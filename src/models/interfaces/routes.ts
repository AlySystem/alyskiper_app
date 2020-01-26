import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";

// Import types
import {
  PublicNavigatorParams,
  GuardsNavigatorParams,
  GuardsNavigatorDrawerParams
} from "../types/routes";

// Import enums
import { AppRoute } from "../enum/routes";

// PUBLIC
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

export interface SplashScreenProps {
  navigation: StackNavigationProp<
    PublicNavigatorParams,
    AppRoute.SPLASH_SCREEN
  >;
  route: RouteProp<PublicNavigatorParams, AppRoute.SPLASH_SCREEN>;
}

// GUARDS -----------------------------------------------------------

// DRAWER
export interface HomeDrawerProps {
  navigation: DrawerNavigationProp<
    GuardsNavigatorDrawerParams,
    AppRoute.HOME_SCREEN
  >;
}

export interface ProfileScreenProps {
  navigation: StackNavigationProp<
    GuardsNavigatorDrawerParams,
    AppRoute.PROFILE_SCREEN
  >;
}

// STACKS
export interface HomeScreenProps {
  navigation: StackNavigationProp<GuardsNavigatorParams, AppRoute.HOME_SCREEN>;
  route: RouteProp<GuardsNavigatorParams, AppRoute.HOME_SCREEN>;
}

// TRANSPORT
export interface MapViewScreenProps {
  navigation: StackNavigationProp<
    GuardsNavigatorParams,
    AppRoute.MAPVIEW_SCREEN
  >;
  route: RouteProp<GuardsNavigatorParams, AppRoute.MAPVIEW_SCREEN>;
}
