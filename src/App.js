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
                        <Link to="/books">LISTA KSIĄŻEK</Link>
                    </li>
                    <li>

                        <Link to="/addBook">DODAJ KSIĄŻKE</Link>
                    </li>
                    <li>
                        <Link to="/about">O NAS</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
