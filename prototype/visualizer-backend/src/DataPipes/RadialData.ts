import {randomIntFromInterval} from "../Util/randUtil"
//This function returns a single datapoint in a radial chart. It is expressly written for the react-vis library used on the frontend
//This function is meant to return data with at most 1 significant figure between the range given.
interface RadialDataStruct{
    angle: number
    radius: number
    label: string
    subLabel?: string
}
export class RadialData {
    private Data: RadialDataStruct
    private rangeMin: number
    private rangeMax: number
    private label: string
    private subLabel: string
    constructor(rangeMin:number, rangeMax:number, label:string, subLabel?:string) {
        this.label = label
        this.subLabel = (subLabel != undefined) ? subLabel : "" //This is a ternary operator, google it to find out what it does.
        this.rangeMin = rangeMin
        this.rangeMax = rangeMax
        this.changeData()
        this.Data = this.getData()
    }
    public changeData() {
        this.Data = { angle: 1, radius: randomIntFromInterval(this.rangeMin * 10, this.rangeMax*10)/10,label: this.label,subLabel: this.subLabel }
       
    }
    public getData() {
        return this.Data
    }
}