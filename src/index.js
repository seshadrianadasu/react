import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js/dist/umd/popper.js';

function Car(props){
  return(
    <div>
      <h1>my name is {props.a.name}</h1>
    </div>
  )
}
function Garage(){
  const info={name:"seshadri",age:23};
  return(
    <>
    <h1>what is your name </h1>
    < Car a={info}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Garage/>
  </React.StrictMode>
);


