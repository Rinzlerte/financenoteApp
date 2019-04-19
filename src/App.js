import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Expenses from './containers/Expenses/Expenses';
import Profits from './containers/Profits/Profits';
import Bankaccountslist from './containers/Bankaccountslist/Bankaccountslist';
import Addexpenses from './components/Addexpenses/Addexpenses';
import Addprofits from './components/Addprofits/Addprofits';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/addexpenses" render={() => <Addexpenses title="Нові Витрати"/>} />
          <Route path="/addprofits" render={() => <Addprofits title="Нові Доходи"/>} />
          <Route path="/bankaccounts" render={() => <Bankaccountslist title="Банк"/>} />
          <Route path="/profit" render={() => <Profits title="Доходи"/>} />
          <Route path="/expenses" render={() => <Expenses title="Витрати"/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
