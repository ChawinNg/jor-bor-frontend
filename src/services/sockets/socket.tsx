import { Socket, io } from "socket.io-client";

class SocketService {
    public socket: Socket | null = null;

    public connect(url: string) {
        return new Promise((rs, rj) => {
            this.socket = io(url)

            if (!this.socket) {return rj();}

            this.socket.on("connect", () => {
                rs(this.socket as Socket);
                console.log(this.socket)
            })

            this.socket.on("connect_error", (err) => {
                console.log("Connection Error: ", err);
                rj(err);
            })
        })
    }
}

export default new SocketService();