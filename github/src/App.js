import React from 'react';
import DataList from "./components/UserData"
import './App.css';
import Followers from "./components/Followers"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData : [],
      followersData : []
    };
  }

  componentDidMount() {
   this.getData()
     
   
  }
   getData = () => {
    fetch("https://api.github.com/users/TySmithJr")
      .then(res => res.json())
      .then(data => this.setState({userData:data}))
      .catch(err => console.log('error'));
};

getFollowers = () => {
  fetch("https://api.github.com/users/TySmithJr/followers")
    .then(res => res.json())
    .then(data => this.setState({followersData:data}))
    .catch(err => console.log('error'));
};
    render() {
      console.log(this.state.userData,"userDATA")
      return (
        <div className="App">
         <DataList data={this.state.userData}/>
         <Followers followersData={this.state.userData}/>
        </div>
      )
    }
}

export default App;
