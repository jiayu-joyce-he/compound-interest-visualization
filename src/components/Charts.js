import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import styled from "styled-components"

export default function Charts({ age, rate, amount, payment }) {
  const ChartStyles = styled.div`
    .charts-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: content-box;
      width: 100%;
      max-width: 900px;
      height: 500px;
      margin: auto;
      padding-bottom: 6rem;
    }

    .charts-container p {
      font-size: 2em;
      text-align: center;
    }

    .charts-custom-tooltip {
      background-color: #fff;
      border: 1px solid #b9b9b9;
      padding: 0.75rem;
    }

    .charts-custom-tooltip p {
      font-size: 1em;
      padding: 0;
    }

    .charts-custom-tooltip .charts-label {
      font-size: 1em;
      padding-bottom: 0.75rem;
      margin: auto;
      border-bottom: 1px solid #000;
    }

    .charts-custom-tooltip .charts-label-total {
      color: #9a9a9a;
    }

    .charts-custom-tooltip .charts-label-contributions {
      color: #82ca9d;
    }

    .charts-custom-tooltip .charts-label-interest {
      color: #ffc658;
    }

    .charts-blue-text {
      color: #0db7ed;
    }

    .charts-red-text {
      color: #f50a0a;
    }

    @media screen and (min-width: 768px) {
      .charts-container p {
        font-size: 2em;
      }

      .charts-custom-tooltip p {
        font-size: 1.5em;
        padding: 0;
      }

      .charts-custom-tooltip .charts-label {
        font-size: 2em;
      }
    }
  `

  /* Set parameter defaults for when no value is inputted. */
  let data = []
  let currYear = new Date().getFullYear()
  const years = 65 - age
  if (rate !== "") {
    rate = parseFloat(rate) / 100
  }

  /* Populate data if viewing investment chart. */

  let contributions = amount
  let total = amount

  data.push({
    Year: currYear,
    Total: total,
    Contributions: contributions,
    Interest: total - contributions,
  })

  for (let i = 1; i <= years; i++) {
    /* Loop over 12 months */
    for (let i = 0; i < 12; i++) {
      total = total * (1 + rate / 12) + payment
      contributions += payment
    }

    let roundedTotal = Math.round(total).toFixed(0)
    data.push({
      Year: currYear + i,
      Total: roundedTotal,
      Contributions: contributions,
      Interest: roundedTotal - contributions,
    })
  }

  /* Customize the barcharts tooltip. */
  let CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="charts-custom-tooltip">
          <p className="charts-label">{`${label}`}</p>
          <p className="charts-label-total">{`Total : $${parseInt(
            payload[0].value + payload[1].value
          ).toLocaleString()}`}</p>
          <p className="charts-label-interest">{`${
            payload[1].name
          } : $${parseInt(payload[1].value).toLocaleString()}`}</p>
          <p className="charts-label-contributions">{`${
            payload[0].name
          } : $${parseInt(payload[0].value).toLocaleString()}`}</p>
        </div>
      )
    }
    return null
  }

  /* The description that will sumarize the chart. */
  const investmentDescription = (
    <p>
      Given your age of
      <span className="charts-blue-text"> {age} </span>
      and you may retire at the age of 65, your investment will be worth
      <span className="charts-blue-text">
        {" "}
        ${parseInt(data[data.length - 1].Total).toLocaleString()}{" "}
      </span>
      in
      <span className="charts-blue-text"> {years} </span>
      years.
    </p>
  )

  return (
    <ChartStyles>
      <div className="charts-container">
        {investmentDescription}
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              type="monotone"
              dataKey={"Contributions"}
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Bar
              type="monotone"
              dataKey="Interest"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartStyles>
  )
}
