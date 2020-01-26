import { AppRoute } from "../enum/routes";

export type AppNavigatorParams = {
  [AppRoute.PUBLIC]: undefined;
  [AppRoute.HOME_SCREEN]: undefined;
  [AppRoute.SPLASH_SCREEN]: undefined;
};

export type PublicNavigatorParams = {
  [AppRoute.WELCOME_SCREEN]: undefined;
  [AppRoute.SIGNIN_SCREEN]: undefined;
  [AppRoute.SIGNUP_SCREEN]: undefined;
  [AppRoute.RESET_PASSWORD_SCREEN]: undefined;
};

export type GuardsNavigatorParams = {
  [AppRoute.HOME_SCREEN]: undefined;
  [AppRoute.MAPVIEW_SCREEN]: undefined;
};

export type GuardsNavigatorDrawerParams = {
  [AppRoute.HOME_SCREEN]: undefined;
  [AppRoute.PROFILE_SCREEN]: undefined;
};
