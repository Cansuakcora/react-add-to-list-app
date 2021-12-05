import React, { Component } from 'react'
import List from './List';
import Form from './Form';
import PropTypes from 'prop-types';

class Contant extends Component {

    static propTypes = {
        baglantilar : PropTypes.array.isRequired,
        addContent : PropTypes.func
       }

    render() {
        return (
            <div>
                <List  baglantilar={this.props.baglanti}/>
                <Form addContent2={this.props.addContent}/>
            </div>
        )
    }
}

export default  Contant;
