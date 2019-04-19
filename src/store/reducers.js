import Bankaccounts from "../components/Data/Bankaccounts.json";
import Expenseslist from "../components/Data/Expenseslist.json";
import Profitslist from "../components/Data/Profitslist.json";

const initialStateForBank = {banksList: Bankaccounts, bankAmount: 0};
const initialStateForExpenes = {expensesList: Expenseslist, expensesAmount: 0};
const initialStateForProfits = {profitsList: Profitslist, profitsAmount: 0};
const initialStateForBalance = {balanceAmount: 0};

function bank(state = initialStateForBank, action = {}) {
    switch (action.type) {
        case GET_BANK_AMOUNT: 
        case GET_BANKS_LIST:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

function profits(state = initialStateForProfits, action = {}) {
    switch (action.type) {
        case GET_PROFITS_AMOUNT:
        case UPDATE_PROFITS_LIST:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

function expenses(state = initialStateForExpenes, action = {}) {
    switch (action.type) {
        case GET_EXPENSES_AMOUNT: 
        case UPDATE_EXPENSES_LIST:
            return {...state, ...action.payload};
        default:
            return state;
      }
}

function balance(state = initialStateForBalance, action = {}) {
switch (action.type) {
        case GET_BALANCE:
        return {...state, ...action.payload};
        default:
        return state;
  }
}

export {
    bank, profits, expenses, balance
}

export const GET_BANK_AMOUNT = 'GET_BANK_AMOUNT'; 
export const GET_BANKS_LIST = 'GET_BANKS_LIST';

export const UPDATE_EXPENSES_LIST = 'UPDATE_EXPENSES_LIST';
export const GET_EXPENSES_AMOUNT = 'GET_EXPENSES_AMOUNT';

export const UPDATE_PROFITS_LIST = 'UPDATE_PROFITS_LIST';
export const GET_PROFITS_AMOUNT = 'GET_PROFITS_AMOUNT';

export const GET_BALANCE = 'GET_BALANCE';