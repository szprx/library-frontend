import React, {Component} from "react";
import "./Book.css"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import DetailsBookPage from "./page/DetailsBookPage";

class Book extends Component {
    id = this.props.info.id;
    title = this.props.info.title;

    render() {
        return (
            <div>
                <Router>
                        <li>
                            <Link to="/bookDetails">{this.title}</Link>
                            <Route path="/bookDetails" exact component={DetailsBookPage(this.id)}></Route>
                        </li>
                </Router>
            </div>
        );
    }
}
export default Book;