
import express from "express";
import {randomIntFromInterval} from "./randUtil";
import {salesdata} from "./salesdata";
const socketIo = require("socket.io")
const http = require("http")


const port = process.env.PORT || 3456;
const index = require('./routes/index');
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
    //  origin means frontend origin so if your frontend exposes 3000, use port  3000
    origin: "http://localhost:30001",
    methods: ["GET", "POST"]
  }
});

//  All this interval manipulation is just to ensure that all clients use the same interval
let interval
io.on("connection", (socket) => {
    console.log("New client connected")
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getandEmit(socket), 1000)
    interval = setInterval(() => getSalesDataNEmit(socket),1000)
    socket.on("disconnect", () => {
        console.log("Client disconnected")
        clearInterval(interval)
    })
})
const getandEmit = async socket => {
    const resp = new Date();
    socket.emit("FromAPI", resp);
    
}
var sales: salesdata[]
sales = []
let year = 1998
const getSalesDataNEmit = async socket => {
    year++
    sales.push({year: year, sales: randomIntFromInterval(2000, 500000)})
    socket.emit("FromSalesData", sales)
    
}
server.listen(port, () => console.log(`Listening on port ${port}`))




