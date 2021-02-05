
import express from "express";
import {LISTENPORT, ORIGIN} from "./config/config";
import {TimeSeriesData} from "./DataPipes/TimeSeriesData";
import {dataPipes} from "./config/dataPipeEnum";
import {RadialData} from "./DataPipes/RadialData";

// import kafkajs from "kafkajs";
const socketIo = require("socket.io")
const http = require("http")


const port = process.env.PORT || LISTENPORT;
const index = require('./routes/index');
const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
    // origin means frontend origin so if your frontend exposes 3000, use port 3000
    // in the case of the demo, the origin is just localhost.
    origin: ORIGIN,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
    //Generating and emitting data for time series charts
    let MDCVisitorData = new TimeSeriesData(40000, 60000)
    let CommitedToDefend = new RadialData(1, 5, dataPipes.CommitedToDefendingSingapore)
    let MindefConfidence = new RadialData(1, 5, dataPipes.ConfidenceInMindef)
    let NSSupportData = new RadialData(1, 5, dataPipes.SupportiveOfNS)
    let CamoKakisVisitorData = new TimeSeriesData(80000, 120000)
    let WonderwallVisitorData = new TimeSeriesData(150000, 170000)
    let MindefVisitorData = new TimeSeriesData(60000, 70000)
    let SDEVisitorData = new TimeSeriesData(10000, 13000)
    let MindefOverallPerformanceData = new TimeSeriesData(1,5)
    console.log("New client connected")
    // Because of the way array.splice works, 
    for (var i = 0; i < 15;i++) {
        MDCVisitorData.addDataPoint()
        CamoKakisVisitorData.addDataPoint()
        WonderwallVisitorData.addDataPoint()
        MindefVisitorData.addDataPoint()
        SDEVisitorData.addDataPoint()
        MindefOverallPerformanceData.addDataPoint()
        
        

    }
    socket.emit(dataPipes.OverallPerformanceMindef, MindefOverallPerformanceData.getGraphData())
        socket.emit(dataPipes.SDEVisitorsPerDay, SDEVisitorData.getGraphData())
        socket.emit(dataPipes.WonderWallVisitorsPerDay, WonderwallVisitorData.getGraphData())
        socket.emit(dataPipes.CamoKakisVisitorsPerDay, CamoKakisVisitorData.getGraphData())
        socket.emit(dataPipes.MDCSiteVisitorPerDay, MDCVisitorData.getGraphData())
        socket.emit(dataPipes.SupportiveOfNS, NSSupportData.getData())
        socket.emit(dataPipes.CommitedToDefendingSingapore, CommitedToDefend.getData())
        socket.emit(dataPipes.ConfidenceInMindef,MindefConfidence.getData() )
    //Generating and emitting data for radial charts
    
    

   
    socket.on("disconnect", () => {
        console.log("Client disconnected.")
        
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))




