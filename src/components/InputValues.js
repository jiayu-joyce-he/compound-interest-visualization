import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"

const InputsStyle = styled.div`
  width: 400px;

  margin: auto;
  padding-top: 50px;

  background: aqua;

  .container p {
    font-size: 2em;
    text-align: center;
    padding: 2rem 1rem 0 1rem;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: "auto",
  },
  margin: {
    height: theme.spacing(10),
  },
  interestSlider: {
    "& p": {
      marginBottom: "-25px",
      marginLeft: "-200px",
    },
    marginBottom: "30px",
  },
  ageSlider: {
    "& p": {
      marginBottom: "-25px",
      marginLeft: "-75px",
    },
    marginBottom: "30px",
  },
}))

const marks = {
  interestRates: [
    {
      value: 5,
      label: "5%",
    },
    {
      value: 10,
      label: "10%",
    },
    {
      value: 15,
      label: "15%",
    },
    {
      value: 20,
      label: "20%",
    },
    {
      value: 25,
      label: "25%",
    },
  ],
  ages: [
    {
      value: 10,
      label: "10",
    },
    {
      value: 18,
      label: "18",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 35,
      label: "35",
    },
    {
      value: 45,
      label: "45",
    },
    {
      value: 55,
      label: "55",
    },
  ],
}

const valuetext = value => {
  return `${value}`
}

export default function InputValues({
  setInterestRate,
  setAge,
  setStartingAmount,
  startingAmount,
  setContribution,
}) {
  const classes = useStyles()

  return (
    <InputsStyle>
      <div className={classes.root}>
        <div className={classes.interestSlider}>
          <div>
            <Typography id="discrete-slider-always" gutterBottom>
              Annual Interest Rates:
            </Typography>
          </div>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks.interestRates}
            min={0}
            max={30}
            onChange={(e, value) => setInterestRate(value)}
            valueLabelDisplay="on"
          />
        </div>
        <div className={classes.ageSlider}>
          <Typography id="discrete-slider-always" gutterBottom>
            Age:
          </Typography>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks.ages}
            min={0}
            max={60}
            onChange={(e, value) => setAge(value)}
            valueLabelDisplay="on"
          />
        </div>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">
            Starting Amount:
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={startingAmount}
            onChange={e => setStartingAmount(parseInt(e.target.value))}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">
            Monthly Contribution:
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={startingAmount}
            onChange={e => setContribution(parseInt(e.target.value))}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    </InputsStyle>
  )
}
