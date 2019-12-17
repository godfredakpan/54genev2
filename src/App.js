import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Layout'
import './bootstrap/dist/css/bootstrap.min.css';
import './bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home'
import './App.css';
import ScrollToTop from './ScrollToTop';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                 <ScrollToTop />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/* <Route path="/sign-up" component={SignUp} />
                        <Route path="/sign-in" component={SignIn} />
                      */}
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}