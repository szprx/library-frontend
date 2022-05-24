import React, {Component} from "react";
import "../style/Book.css"
import {Link} from "react-router-dom";

class Book extends Component {

    render() {
        return (
            <div>
                <li>
                    <Link to={"/book/" + this.props.info.id}> {this.props.info.title}</Link>
                </li>
            </div>)
    };
}

export default Book;