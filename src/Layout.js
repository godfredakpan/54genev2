import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import React, {Component} from 'react';
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}