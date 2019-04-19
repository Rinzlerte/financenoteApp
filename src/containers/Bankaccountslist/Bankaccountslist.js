import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getBanksList } from '../../store/actions'

import './Bankaccountslist.css';

class Bank extends Component {
    
    bankAccounts() {
        const { banksList } = this.props;
        return banksList.map((banks, index) => {
            return (
                <div className="bank" key={index}>
                    <span className="bankname">{banks.name}</span>
                    <span className="card">{banks.card}</span>
                    <span className="card-amount">{banks.ammount}</span>
                </div>
            );
        });
    } 
    
    render () {
        return (
            <div className="bank-accounts-conteiner">
                <div className="bank-accounts-head">
                <Link to="/"><div className="goback-btn"></div></Link>
                <span className="head-info">{this.props.title}</span>
            </div>
            <div className="bank-accounts-box">
                {this.bankAccounts()}
            </div>
            </div>
        );   
    }
}

const mapStateToProps = state => ({
    banksList: state.bank.banksList
})
  
const mapDispatchToProps = dispatch => ({
    getBanksList: () => dispatch(getBanksList())
})
  
export default connect(
    mapStateToProps,mapDispatchToProps)(Bank);