import React, {Component} from 'react';
import { connect } from 'react-redux';
import SingleCard from './Card'

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
                <SingleCard 
                    data = {expensesAmount}
                    urlTo="/expenses" 
                    title="ВИТРАТИ"
                />
                <SingleCard 
                    data = {profitsAmount}
                    urlTo="/profit" 
                    title="ДОХОДИ"
                />
                <SingleCard 
                    data = {bankAmount}
                    urlTo="/bankaccounts" 
                    title="БАНК"
                />
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
