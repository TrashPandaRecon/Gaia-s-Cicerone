"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socketIo = require("socket.io");
const http = require("http");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = process.env.PORT || 3456;
    const index = require('./routes/index');
    const app = express_1.default();
    app.use(index);
    console.log("Hii dad look at me");
    const server = http.createServer(app);
    const io = socketIo(server);
    const getandEmit = (socket) => __awaiter(void 0, void 0, void 0, function* () {
        socket.emit("Hello World");
    });
    let interval;
    io.on("connection", socket => {
        console.log("New client connected");
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getandEmit(socket), 5000);
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });
    server.listen(port, () => console.log(`Listening on port ${port}`));
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map