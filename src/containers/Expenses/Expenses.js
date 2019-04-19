import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateExpenseslist } from '../../store/actions';

import './Expenses.css';

class Expenses extends Component {
    
    deleteListItem(comment) {
        const { expensesList } = this.props;
        const updatedList = expensesList.filter((item) => item.comment !== comment);
        this.props.updateExpenseslist(updatedList);
    }

    expense() {
        const { expensesList } = this.props;
        return expensesList.map((item, index) => {
            return (
                <li className="expenses-list-item" key={index}>
                    <div className="expenses-comment"> {item.comment}</div>
                    <div className="expenses-amount"> {item.ammount}</div>
                    <div className="expenses-del-btn" key={index} onClick={() => this.deleteListItem(item.comment)}>DELETE</div>
                </li>
            );
        });
    } 

    render () {
        return (
        <div className="expenses-conteiner">
            <div className="expenses-head">
                <Link to="/"><div className="goback-btn"></div></Link>
                <span className="head-info">{this.props.title}</span>
                <Link to="/addexpenses"><div className="add-newexpenses-btn"></div></Link>
            </div>
            <div className="expenses-list-box">
                <ul className="expenses-list">{this.expense()}</ul>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    expensesList: state.expenses.expensesList
})
  
const mapDispatchToProps = dispatch => ({
  updateExpenseslist: (newArr) => dispatch(updateExpenseslist(newArr))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Expenses);