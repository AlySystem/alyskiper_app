import { AppRoute } from "../enum/routes";

export type PublicNavigatorParams = {
  [AppRoute.WELCOME_SCREEN]: undefined;
  [AppRoute.SIGNIN_SCREEN]: undefined;
  [AppRoute.SIGNUP_SCREEN]: undefined;
  [AppRoute.RESET_PASSWORD_SCREEN]: undefined;
};

export type GuardsNavigatorParams = {
  [AppRoute.HOME_CREEN]: undefined;
  [AppRoute.MAPVIEW_SCREEN]: undefined;
};
