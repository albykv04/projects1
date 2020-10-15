import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';


export default function Square(props) {
    return (
      <button className="btn btn-success" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }