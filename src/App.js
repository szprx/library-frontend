import React, {Component} from "react";
import {Link} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div className={"container"}>
                <h1>KSIEGARNIA</h1>
                <ul className={"home-list"}>
                    <li className={"navbar"}>
                        <Link className={"main-page-link"} to="/books"
                        >LISTA KSIĄŻEK</Link>
                    </li>
                    <li className={"navbar"}>
                        <Link className={"main-page-link"} to="/addBook">DODAJ KSIĄŻKE</Link>
                    </li>
                    <li className={"navbar"}>
                        <Link className={"main-page-link"} to="/about">O NAS</Link>
                    </li>
                    <br/>
                </ul>
            </div>
        );
    }
}

export default App;
