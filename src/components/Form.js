import React, { useState } from "react"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  TextField,
  ReactDatePicker,
} from "@material-ui/core"

export default function Form() {
  const FormStyles = styled.div`
    body {
      background: #0e101c;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    }

    form {
      max-width: 500px;
      margin: 0 auto;
    }

    h1 {
      font-weight: 100;
      color: black;
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid rgb(79, 98, 148);
    }

    .form {
      background: #0e101c;
      max-width: 400px;
      margin: 0 auto;
    }

    p {
      color: black;
    }

    p::before {
      display: inline;
      content: "⚠ ";
    }

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      border: 1px solid white;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-size: 14px;
    }

    label {
      line-height: 2;
      text-align: left;
      display: block;
      margin-bottom: 13px;
      margin-top: 20px;
      color: black;
      font-size: 14px;
      font-weight: 200;
    }

    button[type="submit"],
    input[type="submit"] {
      background: #ec5990;
      color: white;
      text-transform: uppercase;
      border: none;
      margin-top: 40px;
      padding: 20px;
      font-size: 16px;
      font-weight: 100;
      letter-spacing: 10px;
    }

    button[type="submit"]:hover,
    input[type="submit"]:hover {
      background: #bf1650;
    }

    button[type="submit"]:active,
    input[type="button"]:active,
    input[type="submit"]:active {
      transition: 0.3s all;
      transform: translateY(3px);
      border: 1px solid transparent;
      opacity: 0.8;
    }

    input:disabled {
      opacity: 0.4;
    }

    input[type="button"]:hover {
      transition: 0.3s all;
    }

    button[type="submit"],
    input[type="button"],
    input[type="submit"] {
      -webkit-appearance: none;
    }

    .App {
      max-width: 600px;
      margin: 0 auto;
    }

    button[type="button"] {
      display: block;
      appearance: none;
      background: #333;
      color: white;
      border: none;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 4px;
    }

    pre {
      color: white;
    }

    hr {
      margin-top: 30px;
    }

    button {
      display: block;
      appearance: none;
      margin-top: 40px;
      border: 1px solid #333;
      margin-bottom: 20px;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 4px;
    }
  `

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}
