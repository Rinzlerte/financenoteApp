import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProfitslist } from '../../store/actions';

import './Profits.css';

class Profits extends Component {
    
    deleteListItem(comment) {
        const {profitsList} = this.props;
        const updatedList = profitsList.filter((item) => item.comment !== comment);
        this.props.updateProfitslist(updatedList);
    }

    profit() {
        const { profitsList } = this.props;
        return profitsList.map((item, index) => {
            return (
                <li className="profits-list-item" key={index}>
                    <div className="profits-comment"> {item.comment}</div>
                    <div className="profits-amount"> {item.ammount}</div>
                <div className="profits-del-btn" key={index} onClick={() => this.deleteListItem(item.comment)}>DELETE</div>
                </li>
            );
        });
    } 

    render () {
        return (
        <div className="profits-conteiner">
            <div className="profits-head">
                <Link to="/"><div className="goback-btn"></div></Link>
                <span className="head-info">{this.props.title}</span>
                <Link to="/addprofits"><div className="add-newprofits-btn"></div></Link>
            </div>
            <div className="profits-list-box">
                <ul className="profits-list">{this.profit()}</ul>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
  profitsList: state.profits.profitsList
})
  
const mapDispatchToProps = dispatch => ({
  updateProfitslist: (newArr) => dispatch(updateProfitslist(newArr))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Profits);