import React, {Component, createRef} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateProfitslist} from '../../store/actions';

import './Addprofits.css';

class Addprofits extends Component  {

    constructor(props){
        super(props);
        this.state = {
          notification: ''
        }
        this.inputRef = createRef();
        this.input2Ref = createRef();
    }

    addItem = () => {
        const {profitsList, setProfitslist} = this.props;
        const ammount = parseInt(this.inputRef.current.value)*(-1)
        if (isNaN(ammount)) {
            this.setState({notification: `Перевірте правільність вводу суми`});
            this.inputRef.current.value = "";
            this.input2Ref.current.value = "";
        } 
        else {
            const updatedList = [...profitsList, {
            ammount,
            comment: this.input2Ref.current.value
            }];
                setProfitslist(updatedList);
            this.setState({notification: `Запис на суму ${ammount} uah додано`});
            this.inputRef.current.value = "";
            this.input2Ref.current.value = "";
        }
    }

    clearInputsValue = () => {
        this.inputRef.current.value="";
        this.input2Ref.current.value="";
    }

    enterinputValue = () => {
        console.log(this.input2Ref.current.value);
    }

    backspaceinputValue = () => {
        let x = this.inputRef.current.value;
        this.inputRef.current.value=x.substring(0,x.length-1);
    }

    enterininputvalue = (event) => {
        this.inputRef.current.value=this.inputRef.current.value+event.target.value;
    }

    render () {
        const {notification} = this.state;
        return (
            <div className="add-expenses-conteiner">
                <div className="add-expenses-head">
                    <Link to="/"><div className="goback-btn"></div></Link>
                    <span className="head-info">{this.props.title}</span>
                </div>
                <div className="add-expenses-box">
                    <div className="add-profits-form">
                    <input 
                    className="display" 
                    type="text" 
                    placeholder="сума"
                    ref={this.inputRef}
                    />
                    <input 
                    className="display" 
                    type="text" placeholder="коментар"
                    ref={this.input2Ref}
                    />
                    <div className="info-line">
                        <span className="notification">{notification}</span>
                        <button type="button" className="addbtn" onClick={this.addItem}>ADD</button>
                    </div>
                </div>
                <div className="calculation-form">
                <table>
                <tbody>
                <tr>
                    <td><input className="btn" type="button" value="<" onClick={this.backspaceinputValue}/></td>
                    <td><input className="btn" type="button" value="7" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="8" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="9" onClick={this.enterininputvalue}/></td>
                </tr>
                <tr>
                    <td><input className="btn" type="button" value="C" onClick={this.clearInputsValue}/></td>
                    <td><input className="btn" type="button" value="4" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="5" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="6" onClick={this.enterininputvalue}/></td>
                </tr>
                <tr>
                    <td><input className="btn" type="button" value="0" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="1" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="2" onClick={this.enterininputvalue}/></td>
                    <td><input className="btn" type="button" value="3" onClick={this.enterininputvalue}/></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profitsList: state.profits.profitsList
})
  
const mapDispatchToProps = dispatch => ({
    setProfitslist: (newList) => dispatch(updateProfitslist(newList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Addprofits);