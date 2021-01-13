import {randomIntFromInterval} from "../Util/randUtil"

interface siteUserDataStruct{
    x: number
    y: number
}
export class siteUserData {
    private date: Date
    private userGraphData: siteUserDataStruct[]
    private rangeMin: number
    private rangeMax: number
    constructor(rangeMin:number, rangeMax:number) {
        this.date = new Date()
        this.userGraphData = []
        this.rangeMin = rangeMin
        this.rangeMax = rangeMax
        this.addDataPoint()
    }
    public addDataPoint() {
        this.userGraphData.push({x: this.date.getTime(), y: randomIntFromInterval(this.rangeMin, this.rangeMax)})
        this.date.setDate(this.date.getDate() + 1)
    }
    public getGraphData() {
        return this.userGraphData
    }
}