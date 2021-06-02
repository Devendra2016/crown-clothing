import './App.css';
import HomePage from './Pages/Homepage/HomePage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPages from './Pages/ShopPages/ShopPage.component';
import Headers from './Component/Headers/Headers.component';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPages}/>
    </Switch>
    </div>
  );
}

export default App;
