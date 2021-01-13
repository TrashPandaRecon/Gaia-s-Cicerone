
import express from "express";
import {socialNodeData} from "./DataPipes/SocialNodeData";
import {LISTENPORT, ORIGIN} from "./config/config";
import {siteUserData} from "./DataPipes/SalesData";
import {dataPipes} from "./config/dataPipeEnum";
import kafkajs from "kafkajs";
const socketIo = require("socket.io")
const http = require("http")


const port = process.env.PORT || LISTENPORT;
const index = require('./routes/index');
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
    //  origin means frontend origin so if your frontend exposes 3000, use port 3000
    origin: ORIGIN,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
    
   socket.on("disconnect", () => {
        
    })
})
//  All this interval manipulation is just to ensure that all clients use the same interval
// var interval
// io.on("connection", (socket) => {
//     let MDCVisitorData = new siteUserData(40000, 60000)
//     let CamoKakisVisitorData = new siteUserData(4000, 15000)
//     let WonderwallVisitorData = new siteUserData(150000, 170000)
//     let MindefVisitorData = new siteUserData(60000, 70000)
//     let SDEVisitorData = new siteUserData(10000,13000)
//     let socialdata = new socialNodeData(1000,10000)
//     console.log("New client connected")
//     if (interval) {
//         clearInterval(interval);
//     }
//     interval = setInterval(() => {
//         socialdata.addNode()
//         socket.emit(dataPipes.ListenerRelationshipMapByIncome, socialdata.getSocialData())
//         MDCVisitorData.addDataPoint()
//         socket.emit(dataPipes.MDCSiteVisitorPerDay, MDCVisitorData.getGraphData())
//         CamoKakisVisitorData.addDataPoint()
//         socket.emit(dataPipes.CamoKakisVisitorsPerDay, CamoKakisVisitorData.getGraphData())
//         WonderwallVisitorData.addDataPoint()
//         socket.emit(dataPipes.WonderWallVisitorsPerDay, WonderwallVisitorData.getGraphData())
//         MindefVisitorData.addDataPoint()
//         socket.emit(dataPipes.MinDefSiteVisitorsPerDay,MindefVisitorData.getGraphData())
//         SDEVisitorData.addDataPoint()
//         socket.emit(dataPipes.SDEVisitorsPerDay, SDEVisitorData.getGraphData())

//     },1000)
//     socket.on("disconnect", () => {
//         console.log("Client disconnected, clearing data simulation")
//         clearInterval(interval)
//     })
// })



server.listen(port, () => console.log(`Listening on port ${port}`))




