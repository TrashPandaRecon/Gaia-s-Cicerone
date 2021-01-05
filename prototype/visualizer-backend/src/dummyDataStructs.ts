export interface salesdata {
    x: number
    y: number
}
export interface socialnodedata {
    nodes: {id: string, income:number}[]
    links: {source: string, target:string}[]
}
export const SOCIALNODEDATA = {
	nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
	links: [
		{ source: 'Harry', target: 'Sally' },
		{ source: 'Harry', target: 'Alice' },
	],
};