
//

import connectDB from "./config/database.js";
import dotenv from "dotenv";
import { createServer } from "http";
import {initializeSocket} from "./socket/socket.server.js";
import cors from "cors"; 

dotenv.config();

const app = express();

const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

initializeSocket(httpServer);

app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname, "/client/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "client", "index.html"));
    });
}

httpServer.listen(PORT, () => {
    console.log("server @ port: " + PORT);
    connectDB();
});






