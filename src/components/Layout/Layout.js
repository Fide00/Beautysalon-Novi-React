import '../App/App.css';
import './Layout.css';
import React from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/*De children zijn de routed pages*/}
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;
