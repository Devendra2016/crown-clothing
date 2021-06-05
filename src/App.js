import './App.css';
import HomePage from './Pages/Homepage/HomePage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPages from './Pages/ShopPages/ShopPage.component';
import Headers from './Component/Headers/Headers.component';
import signInAndsignUp from './Pages/signinAndsignUpPages/signInAndsignUp.component';
import {auth,createUserProfileDocument} from './Utils/Firebase.utils';
import React from 'react';
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      currentUSer:null
    }
  }
  unSubscribeFromAuth=null;
  componentDidMount()
  {
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        this.setState({id:snapshot.id,
        ...snapshot.data()},()=>console.log(this.state))
      })
      }
      this.setState({currentUSer:userAuth});
    })
  }
  componentWillUnmount()
  {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Headers currentUSer={this.state.currentUSer}/>
        <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPages}/>
      <Route path='/signIn' component={signInAndsignUp}/>
      </Switch>
      </div>
    );
  }
}

export default App;
