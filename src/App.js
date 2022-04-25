import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import RegularComponent from './Components/pureComponent/RegularComponentExample';
import PureComponentExample from './Components/pureComponent/PureComponetsExample';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      msg:"Vipin",
    };
  }




startInterval = () => {
  const val = Math.round(10 + Math.random());
  //this.state.arr.push(val);
  const updatedArr = [...this.state.arr];
  updatedArr.push(val);
  this.setState({
    arr:updatedArr,
  });
}, 2000);
}
  // setInterval(()=> {
  //   this.setState({
  //     msg:"Vipin",
  //   });

render() {
  console.log("component Re-rendering");
  return(
    <div className='App'>
      <h1>
        Message : {this.state.msg}
      </h1>
        
      <RegularComponent   message = {this.state.msg} />
      <PureComponentExample message = {this.state.msg}/>
      <button onClick={this.startInterval}>Click Here</button>
    </div>
  )

}}


export default App;

//If the previous value of state or props and the new value os state or props is the same,the component(pure Component) will not re-render itself.