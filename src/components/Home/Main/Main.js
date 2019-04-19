import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {getBankAmount} from '../../../store/actions';
import {getProfitsAmount} from '../../../store/actions';
import {getExpensesAmount} from '../../../store/actions';

import './Main.css';

class Main extends Component {
    componentWillMount () {
        this.props.getBankAmount();
        this.props.getProfitsAmount();
        this.props.getExpensesAmount();
    }
    render () { 

        const {bankAmount} = this.props;
        const {profitsAmount} = this.props;
        const {expensesAmount} = this.props;
        return  (
            <div className="main-conteiner">
                    <div className="main-box main-box1">
                        <Link to="/expenses">
                            <h1>ВИТРАТИ</h1>
                            <span className="expenses">{expensesAmount} UAH</span>
                        </Link>
                    </div>
        
                    <div className="main-box main-box2">
                        <Link to="/profit">
                            <h1>ДОХОДИ</h1>
                            <span className="profit">{profitsAmount} UAH</span>
                        </Link>
                    </div>
        
                    <div className="main-box main-box3">
                        <Link to="/bankaccounts">
                            <h1>БАНК</h1>
                            <span className="bank-balanse-status">{bankAmount} UAH</span>
                        </Link>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bankAmount: state.bank.bankAmount,
    profitsAmount: state.profits.profitsAmount,
    expensesAmount: state.expenses.expensesAmount
  })
  
  const mapDispatchToProps = dispatch => ({
    getBankAmount: () => dispatch(getBankAmount()),
    getProfitsAmount: ()=> dispatch(getProfitsAmount()),
    getExpensesAmount: () => dispatch(getExpensesAmount()),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);
