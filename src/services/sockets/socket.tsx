import { Socket, io } from "socket.io-client";

class SocketService {
  public socket: Socket | null = null;

  public connect(url: string) {
    return new Promise((rs, rj) => {
      this.socket = io(url, {
        withCredentials: true,
      });

      if (!this.socket) {
        return rj();
      }

      this.socket.on("connect", () => {
        rs(this.socket as Socket);
        console.log(this.socket);
      });

      this.socket.on("connect_error", (err) => {
        console.log("Connection Error: ", err);
        rj(err);
      });
    });
  }

  public joinLobby() {
    if (!this.socket) {
      return;
    }

    this.socket.emit("custom_event", { name: "masatokung", age: "21" });
    console.log("emit successful");
  }

  public sendMessage(id: string, message: string) {
    if (!this.socket) {
      return;
    }

    this.socket.emit(id, message);
  }

  public getMessage(id: string) {
    if (!this.socket) {
      return;
    }

    this.socket.on(id, (value: any) => {
      console.log(value);
    });
  }
}

export default new SocketService();
