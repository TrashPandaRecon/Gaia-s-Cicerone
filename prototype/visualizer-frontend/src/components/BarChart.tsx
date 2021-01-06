
import React from 'react';
import * as d3 from 'd3';
import {useD3} from './hooks/useD3';
import {GradientDefs,DiscreteColorLegend} from 'react-vis';

function BarChart({ data }) {
	const ref = useD3(
		(svg) => {
			const height = 500;
			const width = 1000;
			const margin = { top: 20, right: 30, bottom: 30, left: 40 };

			const x = d3
				.scaleBand()
				.domain(data.map((d) => d.x))
				.rangeRound([margin.left, width - margin.right])
				.padding(0.1);

			const y1 = d3
				.scaleLinear()
				.domain([0, d3.max(data, (d) => d.y)])
				.rangeRound([height - margin.bottom, margin.top]);

			const xAxis = (g) =>
				g.attr('transform', `translate(0,${height - margin.bottom})`).call(
					d3
						.axisBottom(x)
						.tickValues(
							d3
								.ticks(...d3.extent(x.domain()), width / 40)
								.filter((v) => x(v) !== undefined)
						)
						.tickSizeOuter(0)
				);

			const y1Axis = (g) =>
				g
					.attr('transform', `translate(${margin.left},0)`)
					.style('color', 'steelblue')
					.call(d3.axisLeft(y1).ticks(null, 's'))
					.call((g) => g.select('.domain').remove())
					.call((g) =>
						g
							.append('text')
							.attr('x', -margin.left)
							.attr('y', 10)
							.attr('fill', 'currentColor')
							.attr('text-anchor', 'start')
							.text(data.y1)
					);

			svg.select('.x-axis').call(xAxis);
			svg.select('.y-axis').call(y1Axis);

			svg
				.select('.plot-area')
				.attr('fill', 'steelblue')
				.selectAll('.bar')
				.data(data)
				.join('rect')
				.attr('class', 'bar')
				.attr('x', (d) => x(d.x))
				.attr('width', x.bandwidth())
				.attr('y', (d) => y1(d.y))
                .attr('height', (d) => y1(0) - y1(d.y));
            
                
		},
		[data.length]
	);

    return (
        <>
		<svg
			ref={ref}
			style={{
				height: 500,
				width: '100%',
				marginRight: '0px',
				marginLeft: '0px',
			}}
		>
			<g className="plot-area"/>
			<g className="x-axis" />
			<g className="y-axis" />
        </svg>
        <svg height={0} width={0}>
					<GradientDefs>
						<pattern
							id="stripes"
							width="4"
							height="4"
							patternUnits="userSpaceOnUse"
						>
							<path d="M 0, 0 l 5, 5" stroke="steelblue" strokeLinecap="square" />
						</pattern>
						<pattern
							id="circles"
							width="3"
							height="3"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="1.5" cy="1.5" r="0.8" fill="magenta" />
						</pattern>
					</GradientDefs>
				</svg>
				<DiscreteColorLegend
					orientation="horizontal"
					width={300}
					items={[{ title: 'Sales', color: 'steelblue', strokeWidth:100 }]}
            />
            </>
	);
}

export default BarChart;
