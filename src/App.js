import React, { Component } from 'react'
import './App.css';
import Contant from './Contant';

class App extends Component {

  constructor (props){
    super(props);
    this.addContent = this.addContent.bind(this);
  }

  state = {
   baglanti:[{
     name: 'Cansu',
     phone: '05050505050'
   },

   {
    name: 'Tuba',
    phone: '080808080'
  }]
 
  };

  addContent(istediginiyaz){

    const{baglanti}=this.state;
    baglanti.push(istediginiyaz);

    this.setState({
      baglanti:baglanti
    });

  }

  render() {
  return (
    <div className="App">
      <Contant  addContent={this.addContent} baglanti={this.state.baglanti} />
    </div>
  );
}
}
export default App;
