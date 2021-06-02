import './App.css';
import HomePage from './Pages/Homepage/HomePage.component';
import {Route} from 'react-router-dom';
import ShopPages from './Pages/ShopPages/ShopPage.component';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPages}/>
    </div>
  );
}

export default App;
