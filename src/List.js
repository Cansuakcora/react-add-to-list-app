import React, { Component } from 'react'
import './List.css';
import PropTypes from 'prop-types';

class List extends Component {

    static propTypes = {
     baglantilar : PropTypes.array.isRequired
    }

    //filtreleme işlemleri
    state={
        filterText:''
    }
    onChangeFilter = (e) =>{
         this.setState({
             filterText:e.target.value
         })
    };

        //filtreleme işlemleri
    render() {

        const filterContac = this.props.baglantilar.filter(
            ornek => {
                return ornek.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )
        return (
            <div className={"form"}>
                <input value={this.state.filterText} onChange={this.onChangeFilter} name="filter" id="filter" placeholder={"filter by name or phone"}></input>
                <ul className={"list"}>

                    {
                       filterContac.map(ornek => 

                                <li key={ornek.phone}>
                                  <span className={"list"}> {ornek.name} </span>
                                  <span className={"phone"}>{ornek.phone}</span>
                                </li>
                            )
                    }
                    
                </ul>
            </div>
        )
    }
}

export default List;
