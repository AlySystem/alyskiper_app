import socketIO from "socket.io-client";
import { Observable, fromEvent, Subject } from "rxjs";

// Import utils
import { SERVER_URL } from "../utils";

export class WebsocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;
  private static _instance: WebsocketService;

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public init(options?: SocketIOClient.ConnectOpts): Observable<string> {
    return new Observable<string>(subscriber => {
      this.socket = socketIO(SERVER_URL, options);

      this.socket.on("connect", () => {
        subscriber.next("connect");
      });

      this.socket.on("disconnect", () => {
        subscriber.error("disconnect");
      });

      this.socket.on("error", (error: any) => {
        subscriber.error(error);
      });

      this.socket.on("connect_error", (error: any) => {
        subscriber.error(error);
      });

      return () => {
        this.disconnect();
      };
    });
  }

  public publish(event: string, payload?: any, callback?: Function): void {
    this.socket.emit(event, payload, callback);
  }

  public eventObservable<T>(event: string): Observable<T> {
    return fromEvent(this.socket, event);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
