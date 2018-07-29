import React, {Component} from 'react';


class Page extends Component {

  componentDidMount() {
    console.log("Mounted " + this.props.name);
  }

  componentWillUnmount() {
    console.log("Unmounting " + this.props.name);
  }

  render(){
    return (<div>{this.props.name}</div>)
  }
}

export default Page;
