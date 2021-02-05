import {uniqueNamesGenerator, adjectives, colors, animals} from "unique-names-generator"
import {randomIntFromInterval} from "../Util/randUtil"

// This class constructs a node and link object and increments it on demand.
// The data is purely id and income, this is a limited usecase data struct written to be used with most linked node graphs.
// This class was specifically written to be used with the react-vis-force library. 
// Mainly for testing purposes. 
interface socialNodeDataStruct {
    nodes: {id: string, income:number}[]
    links: {source: string, target:string}[]
}
export class socialNodeData {
    private socialdata: socialNodeDataStruct
    private incomeRangeMin: number
    private incomeRangeMax: number
    constructor(incomeRangeMin: number, incomeRangeMax: number){
        this.incomeRangeMax = incomeRangeMax
        this.incomeRangeMin = incomeRangeMin
        this.socialdata = {nodes: [], links: []}
        this.addNode()
    }

    public addNode() {
        var name = uniqueNamesGenerator({dictionaries: [adjectives, colors, animals]})
        this.socialdata.nodes.push({id: name, income: randomIntFromInterval(this.incomeRangeMin, this.incomeRangeMax)})
        this.socialdata.links.push({source: name, target: this.socialdata.nodes[randomIntFromInterval(0, this.socialdata.nodes.length - 1)].id})
     
    }

    public getSocialData(){
        return this.socialdata
    }

}
