import React, {Component} from "react";
import "./style/AppStyle.css"
import {Link} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div>
                KSIEGARNIA
                <ul>
                    <li>
                        <Link to="/books">BooksPage</Link>
                    </li>
                    <li>

                        <Link to="/addBook">AddBook</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
