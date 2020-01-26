import React, { ReactElement, useEffect, useState, useReducer } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationNativeContainer } from "@react-navigation/native";
import { retryWhen, tap, delay } from "rxjs/operators";
import AsyncStorage from "@react-native-community/async-storage";

// Import routes
import { GuardsStack } from "./guards/stack/stack.guard";
import { PublicStack } from "./public/stack.public";

// Import services
import { WebsocketService as Websocket } from "../services/websocket.service";

// Import models
// Import enums
import { AppRoute } from "../models/enum/routes";

// Import types
import { AppNavigatorParams } from "../models/types/routes";
import { Action } from "../models/types/action";

// Import interfaces
import { User } from "../models/interfaces/user";

// Import screen
import SplashScreen from "../screens/public/SplashScreen";

// Import context
import { AuthContext } from "../context/auth.context";

const Stack = createStackNavigator<AppNavigatorParams>();

const Initial_State = {
  user: {
    name: undefined,
    lastName: undefined,
    userName: undefined,
    email: undefined,
    phone: undefined,
    avatar: undefined,
    country: undefined,
    countryId: undefined,
    cityId: undefined,
    cityName: undefined,
    iso: undefined,
    userId: undefined,
    userToken: undefined,
    auth: false
  },
  isLoading: true
};

const reducer = (prevState: any, action: Action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        user: action.payload,
        isLoading: false
      };
    case "SIGN_IN":
      return {
        ...prevState,
        user: action.payload
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        user: Initial_State
      };
  }
};

export const Routes = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, Initial_State);

  useEffect(() => {
    const trySignIn = async () => {
      let user;
      try {
        user = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.error(error);
      }
      dispatch({ type: "RESTORE_TOKEN", payload: user });
    };
    trySignIn();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (payload: User) => {
        dispatch({ type: "SIGN_IN", payload });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (payload: User) => {
        dispatch({ type: "SIGN_IN", payload });
      }
    }),
    []
  );

  useEffect(() => {
    const socket = Websocket.instance;
    const observable$ = socket.init();

    const subscription = observable$
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(err => console.warn("error")),
            delay(1000)
          )
        )
      )
      .subscribe(console.log);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationNativeContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen
              name={AppRoute.SPLASH_SCREEN}
              component={SplashScreen}
            />
          ) : state.user.auth === null ? (
            <Stack.Screen name={AppRoute.PUBLIC} component={PublicStack} />
          ) : (
            <Stack.Screen name={AppRoute.HOME_SCREEN} component={GuardsStack} />
          )}
        </Stack.Navigator>
      </NavigationNativeContainer>
    </AuthContext.Provider>
  );
};
