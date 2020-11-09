import React, { useState } from "react"
import styled from "styled-components"
import InputValues from "./InputValues.js"
import Charts from "./Charts.js"

export default function InteractiveVisualizations() {
  // const VisualizationStyles = styled.div`
  //   background: yellow;
  //   display: flex;
  // `

  const [startingAmount, setStartingAmount] = useState(1000)
  const [contribution, setContribution] = useState(0)
  const [interestRate, setInterestRate] = useState(3)
  const [age, setAge] = useState(18)

  return (
    <>
      <InputValues
        setInterestRate={setInterestRate}
        setAge={setAge}
        setStartingAmount={setStartingAmount}
        setContribution={setContribution}
      />
      <Charts
        amount={startingAmount}
        rate={interestRate}
        age={age}
        payment={contribution}
      />
    </>
  )
}
