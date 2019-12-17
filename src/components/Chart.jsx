import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

// EXAMPLE DATA FORMAT
// const data = [
//   {
//     value: 0,
//     time: 0
//   },
//   {
//     value: 100,
//     time: 1
//   }
// ];

export default class Example extends PureComponent {
  // jsfiddleUrl for testing default settings "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <LineChart
        width={800}
        height={600}
        data={convertData(this.props.results.bestEstimateResults)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        dot="false"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" type="number">
          <Label value="Months" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label
            value="Networth"
            dy={40}
            offset={-15}
            position="insideTopLeft"
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          dot={false}
          //activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}

function convertData(data) {
  var output = [];
  var i;
  for (i = 0; i < data.length; i++) {
    output.push({
      value: data[i],
      time: i
    });
  }

  return output;
}
