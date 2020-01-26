import socketIO from "socket.io-client";
import { Observable, fromEvent, Subject } from "rxjs";

// Import utils
import { SERVER_URL } from "src/utils";

export class WebsocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;
  private static _instance: WebsocketService;

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public init(options?: SocketIOClient.ConnectOpts) {
    console.log("%cinitiating socket service...", "color: green");

    this.socket = socketIO(SERVER_URL, options);
  }

  public publish(event: string, payload?: any, callback?: Function): void {
    console.log("%cemitting message the server", "color: yellow");

    this.socket.emit(event, payload, callback);
  }

  public onStatus(): Observable<any> {
    console.log("%clistening message on the server", "color: blue");

    return new Observable(subscriber => {
      this.socket.on("connect", (socket: any) => {
        console.log("connected", socket.id);
      });

      this.socket.on("disconnect", () => {
        console.warn("disconnected");
      });

      this.socket.on("error", (error: any) => {
        console.warn("error");
        subscriber.error(error);
      });

      this.socket.on("connect_error", (error: any) => {
        console.warn("connect_error");
        subscriber.error(error);
      });

      return () => {
        console.log("observable completed");
        this.disconnect();
      };
    });
  }

  public eventObservable<T>(event: string): Observable<T> {
    return fromEvent(this.socket, event);
  }

  public disconnect(): void {
    console.log("%cdisconnected the server", "color: red");

    this.socket.disconnect();
  }
}
