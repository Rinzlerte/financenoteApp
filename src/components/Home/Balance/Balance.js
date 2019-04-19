import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getBalance} from '../../../store/actions';

import './Balance.css';

class Balance extends Component {
    
    componentWillMount () {
        this.props.getBalance();
    }

    render () { 
        const {balanceAmount} = this.props;

        return  (
            <div className="mybalance">
                <div className="balanse-info">ACTUAL BALANCE: {balanceAmount} UAH</div>
                <div className="balance-navigation">
                    <Link to="/addexpenses"><div className="remove-btn"></div></Link>
                    <Link to="/addprofits"><div className="add-btn"></div></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    balanceAmount: state.balance.balanceAmount,
})
  
const mapDispatchToProps = dispatch => ({
    getBalance: () => dispatch(getBalance()),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(Balance);