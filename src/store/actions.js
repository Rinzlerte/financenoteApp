   import {
    UPDATE_EXPENSES_LIST, 
    GET_EXPENSES_AMOUNT,
  
    UPDATE_PROFITS_LIST,
    GET_PROFITS_AMOUNT, 
  
    GET_BANKS_LIST,
    GET_BANK_AMOUNT,
  
    GET_BALANCE
  } from './reducers';
  
  //expenses-витрати
  export function updateExpenseslist(expensesList) {
    return dispatch => {
      dispatch({
        type: UPDATE_EXPENSES_LIST,
        payload: {expensesList}
      })
      dispatch(getExpensesAmount())
    }
  }
  
  export function getExpensesAmount() {
    return (dispatch, getState) => {
      const { expenses: {expensesList}} = getState();
      const expensesAmount = expensesList.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.ammount
      }, 0)
      dispatch({
          type: GET_EXPENSES_AMOUNT,
          payload: {expensesAmount}
      })
    }
  }
  
  //profits-доходи
  export function updateProfitslist(profitsList) {
    return dispatch => {
      dispatch ({
        type: UPDATE_PROFITS_LIST,
        payload: {profitsList}
    })
      dispatch(getProfitsAmount())
    }
  }
  
  export function getProfitsAmount() {
    return (dispatch, getState) => {
      const { profits: {profitsList}} = getState();
      const profitsAmount = profitsList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.ammount
      }, 0)
      dispatch({
        type: GET_PROFITS_AMOUNT,
        payload: {profitsAmount}
      })
    }
  }
  //bank-банк
  export function getBanksList(banksList) {
    return {
        type: GET_BANKS_LIST,
        payload: {banksList}
    }   
  }
  
  export function getBankAmount() {
      return (dispatch, getState) => {
        const { bank: {banksList} } = getState();
        const bankAmount = banksList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.ammount
        }, 0)
       dispatch({
          type: GET_BANK_AMOUNT,
          payload: {bankAmount}
      })
    }
  }

//--balance
export function getBalance() {
    return (dispatch, getState) => {
      const { expenses: {expensesAmount}} = getState();
      const { profits: {profitsAmount}} = getState();
      const { bank: {bankAmount}} = getState();
      const balanceAmount = (expensesAmount + profitsAmount + bankAmount);
      dispatch({
        type: GET_BALANCE,
        payload: {balanceAmount}
      })
    }
  }