import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header";
import Content from "./components/content";
// import Content from "./components/content"
import './components/style.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content/>
        
       
      
        
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));