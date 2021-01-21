import {randomIntFromInterval} from "../Util/randUtil"
// This class generates simple time series data incremented by a single day each time a datapoint is added.
// Values are generated according the range given while instantiating an instance of the class.
interface TimeSeriesDataStruct{
    x: number
    y: number
}
export class TimeSeriesData {
    private date: Date
    private data: TimeSeriesDataStruct[]
    private rangeMin: number
    private rangeMax: number
    constructor(rangeMin:number, rangeMax:number) {
        this.date = new Date()
        this.data = []
        this.rangeMin = rangeMin
        this.rangeMax = rangeMax
        this.addDataPoint()
    }
    public addDataPoint() {
        this.data.push({x: this.date.getTime(), y: randomIntFromInterval(this.rangeMin, this.rangeMax)})
        this.date.setDate(this.date.getDate() + 1)
    }
    public getGraphData() {
        return this.data
    }
}