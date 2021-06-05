import './App.css';
import HomePage from './Pages/Homepage/HomePage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPages from './Pages/ShopPages/ShopPage.component';
import Headers from './Component/Headers/Headers.component';
import signInAndsignUp from './Pages/signinAndsignUpPages/signInAndsignUp.component';
import {auth,createUserProfileDocument} from './Utils/Firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
class App extends React.Component{
  
  unSubscribeFromAuth=null;
  componentDidMount()
  {
    const {setCurrentUser}= this.props;
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        this.props.setCurrentUser({id:snapshot.id,
        ...snapshot.data()},
        ()=>console.log(this.state));
      });
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount()
  {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Headers/>
        <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPages}/>
      <Route path='/signIn' component={signInAndsignUp}/>
      </Switch>
      </div>
    );
  }
}
const mapToDispatchProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapToDispatchProps)(App);
