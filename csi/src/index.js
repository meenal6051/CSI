import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import FormComponent from "./Components/form-component";
import SuccessComponent from "./Components/success-component";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<FormComponent />, rootElement);

// // // // If you want to start measuring performance in your app, pass a function
// // // // to log results (for example: reportWebVitals(console.log))
// // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
