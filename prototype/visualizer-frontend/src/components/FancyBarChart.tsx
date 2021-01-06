import React from 'react';
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend,
    GradientDefs
} from 'react-vis';

function yDomain(data) {
    
 return data.reduce(
  (res, row) => {
    return {
      max: Math.max(res.max, row.y),
      min: Math.min(res.min, row.y)
    };
  },
  {max: -Infinity, min: Infinity}
    );
}
function FancyBarChart({ data}){
	
    const  useCanvas  = false
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    
    return (
			<div>
				<XYPlot
					margin={{ left: 110 }}
					xType="ordinal"
					width={1000}
					height={500}
				>
					<BarSeries className="vertical-bar-series-example" data={data} />
					<XAxis />
					<YAxis />
				</XYPlot>
				
			</div>
		);
	
}
export default FancyBarChart