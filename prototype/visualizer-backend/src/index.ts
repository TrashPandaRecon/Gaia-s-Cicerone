
import express from "express";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";
import {randomIntFromInterval} from "./randUtil";
import {salesdata, socialnodedata} from "./dummyDataStructs";
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
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//  All this interval manipulation is just to ensure that all clients use the same interval
var interval
io.on("connection", (socket) => {
    var sales: salesdata[]
    sales = []
    var year = 1998
    var socialdata: socialnodedata
    socialdata = {nodes:[],links:[]}
 
    console.log("New client connected")
    if (interval) {
        clearInterval(interval);
    }
    //incrementing dummy data
    interval = setInterval(() => {
        var name = uniqueNamesGenerator({dictionaries: [adjectives, colors, animals]})
        socialdata.nodes.push({id: name, income: randomIntFromInterval(1000, 10000)})
        socialdata.links.push({source: name, target: socialdata.nodes[randomIntFromInterval(0, socialdata.nodes.length-1)].id})

        year++;
        sales.push({year: year, sales: randomIntFromInterval(2000, 500000)})
    },1000)
    interval = setInterval(() => getSocialDataNEmit(socket,socialdata), 1000) 
    interval = setInterval(() => getandEmit(socket), 1000)
    interval = setInterval(() => getSalesDataNEmit(socket,sales),1000)
    socket.on("disconnect", () => {
        console.log("Client disconnected, clearing data simulation")
        clearInterval(interval)
    })
})
const getandEmit = async socket => {
    const resp = new Date();
    socket.emit("FromAPI", resp);
    
}

const getSalesDataNEmit = async (socket, sales:salesdata[]) => {
    socket.emit("FromSalesData", sales)
}
const getSocialDataNEmit = async (socket, socialdata: socialnodedata) => {
    socket.emit("FromSocialNodeData", socialdata)
    console.log(socialdata)
}
server.listen(port, () => console.log(`Listening on port ${port}`))




