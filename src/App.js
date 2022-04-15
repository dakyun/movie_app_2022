import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor 실행완료');
  }
  state={count:0,};
  add=()=>{
    this.setState({count:this.state.count+1})
  }
  minus=()=>{
    this.setState({count:this.state.count-1})
  }
  componentDidMount(){
    console.log('componentDidMount실완');
  }
  componentDidUpdate(){
    console.log('Update실완');
  }
  componentWillUnmount(){
    console.log('WillUnmount');
  }
  render(){
    console.log('render 실완');
    return (
    <div>
      <h1>상담대기 순서는 {this.state.count}번 입니다.</h1>
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
    </div>
    )
  }
}

export default App;
