import React, {Component} from "react";
import "./Book.css"

class Book extends Component {
    title;

    render() {
        return (
            <div>
                <ul>
                    <li> {this.props.info.title}</li>
                </ul>
            </div>
        );
    }
}

export default Book;