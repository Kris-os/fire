import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ReferenceLine,
  ResponsiveContainer,
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
      <ResponsiveContainer>
        <LineChart
          data={convertData(this.props.results.baseCaseResults, this.props.age)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          dot="false"
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="age"
            type="number"
            domain={[this.props.age]}
            ticks={getTicks(this.props.age)}
          >
            <Label value="Age" offset={0} position="insideBottom" />
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
          <ReferenceLine
            x={
              Number(this.props.results.daysUntilFinancialIndependence) /
                365.25 +
              Number(this.props.age)
            }
            stroke="#ffb7b2"
            label=""
          />
          <Line
            type="monotone"
            dataKey="networth"
            dot={false}
            stroke="#ff9aa2"
            strokeWidth={4}
            //activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

function convertData(data, startingAge) {
  var output = [];
  if (data == null) return output;
  var i;
  for (i = 0; i < data.length; i++) {
    output.push({
      networth: data[i],
      age: i / 12 + Number(startingAge),
    });
  }

  return output;
}

function getTicks(age) {
  var ageAsNumber = Number(age);
  var output = [];
  output[0] = Math.floor(ageAsNumber);
  var runningAge = ageAsNumber + 1;
  var i = 1;
  while (runningAge < 91) {
    if (Math.floor(runningAge) % 10 === 0) {
      output[i] = Math.floor(runningAge);
      i++;
    }
    runningAge++;
  }
  return output;
}
