import React, { FunctionComponent, useEffect } from "react";
import { View, Text } from "react-native";
import { retryWhen, tap, delay } from "rxjs/operators";
import { Observable } from "rxjs";

// Import services
import { WebsocketService as Websocket } from "./src/services/websocket.service";

const Skiper: FunctionComponent = () => {
  useEffect(() => {
    const socket = Websocket.instance;
    const observable$ = socket.init();

    const subscription = observable$
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(err => console.error("error")),
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
    <View>
      <Text>Skiper</Text>
    </View>
  );
};

export default Skiper;
