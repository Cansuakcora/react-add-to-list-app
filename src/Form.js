import React, { Component } from 'react'
import './Form.css';

 class Form extends Component {
     constructor(props){
         super(props);
         this.changefunc = this.changefunc.bind(this);
         this.onSub = this.onSub.bind(this);
     }
   state={
       name: '' ,
       phone : ''
   };

   changefunc(e){
       this.setState({
          [e.target.name]:e.target.value 
       })
   }

   onSub(e){
     e.preventDefault(); //urldeki değeri düzeltmek için eklenir
     this.props.addContent2({  //inputtakileri yukarıdaki alana ekler
         ...this.state
     });
     this.setState({name:'' , phone: ''}) //butona bastıktan sonra inputun içini temizler
   }

    render() {
        return (
            <div>
                <form onSubmit={this.onSub}>
                    <input name="name" onChange={this.changefunc} id="name-input" value={this.state.name} className="form__name-input" placeholder={"Adınızı Giriniz"}></input>

                    <input name="phone" onChange={this.changefunc} id="name-phone" value={this.state.phone} className="form__tel-input" placeholder={"Tel No Giriniz"}></input>
                    
                    <button className="ekle-btn">EKLE</button>
                </form>
            </div>
        )
    }
}

export default Form;