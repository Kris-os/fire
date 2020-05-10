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
          data={convertData(this.props.results, this.props.age)}
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
              value="Net-worth"
              dy={40}
              offset={-20}
              position="insideTopLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend />

          <ReferenceLine y={0} stroke="#666666" label="" />
          <Line
            name="Lower monthly spend"
            type="monotone"
            dataKey="lowerMonthlySpendResults"
            dot={false}
            stroke="#75c2a6"
            strokeWidth={4}
            //activeDot={{ r: 8 }}
          />
          <ReferenceLine
            x={
              Number(
                this.props.results
                  .lowerMonthlySpendDaysUntilFinancialIndependence
              ) /
                365.25 +
              Number(this.props.age)
            }
            stroke="#75c2a6"
            label=""
          />
          <Line
            name="Base case"
            type="monotone"
            dataKey="networth"
            dot={false}
            stroke="#ff9aa2"
            strokeWidth={4}
            //activeDot={{ r: 8 }}
          />
          <ReferenceLine
            x={
              Number(this.props.results.daysUntilFinancialIndependence) /
                365.25 +
              Number(this.props.age)
            }
            stroke="#ffb7b2"
            label=""
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

function convertData(data, startingAge) {
  return convertDataArray(
    data.baseCaseResults,
    data.lowerMonthlySpendResults,
    startingAge
  );
}

function convertDataArray(dataArray1, dataArray2, startingAge) {
  var output = [];
  if (dataArray1 == null) return output;
  var i;
  for (i = 0; i < dataArray1.length; i++) {
    output.push({
      networth: dataArray1[i],
      lowerMonthlySpendResults: dataArray2[i],
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
