import React, {Component} from "react";
import "./Book.css"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import BookDetailsPage from "./page/BookDetailsPage";

class Book extends Component {
    id = this.props.info.id;
    title = this.props.info.title;

    render() {
        return (
            <div>
                <Router>
                        <li>
                            <Link to="/bookDetails">{this.title}</Link>
                            <Route path="/bookDetails" exact component={BookDetailsPage(this.id)}></Route>
                        </li>
                </Router>
            </div>
        );
    }
}
export default Book;