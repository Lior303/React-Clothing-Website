import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom';
import React from "react";
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user})
            // createUserProfileDocument(user)
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: userAuth})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
