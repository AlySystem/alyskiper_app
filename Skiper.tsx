import React, { FunctionComponent, useEffect } from "react";
import { View, Text } from "react-native";
import { retryWhen, tap, delay } from "rxjs/operators";
import { Observer } from "rxjs";

// Import services
import { WebsocketService as Websocket } from "src/services/websocket.service";

const Skiper: FunctionComponent = () => {
  const socket = Websocket.instance;
  socket.init();

  const observer: Observer<any> = {
    next: value => {
      console.log(value);
    },
    error: error => {
      console.log(error);
    },
    complete: () => {
      console.log("complete");
    }
  };

  useEffect(() => {
    socket
      .onStatus()
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(error => console.warn("error operator tap", errors)),
            delay(1000)
          )
        )
      )
      .subscribe(observer);
  }, []);

  return (
    <View>
      <Text>Skiper</Text>
    </View>
  );
};

export default Skiper;
