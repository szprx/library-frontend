import React from "react";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className={"navbar"}>
            <div className={"navbar-title"}>
                <Link className={"page-link"}
                      to="/">
                    KSIEGARNIA
                </Link>
            </div>
            <div className={"navbar-links"}>
                <ul className={"navbar-list"}>
                    <li className={"navbar-list-element"}>
                        <Link className={"main-page-link"}
                              to="/books">
                            LISTA KSIĄŻEK
                        </Link>
                    </li>
                    <li className={"navbar-list-element"}>
                        <Link className={"main-page-link"}
                              to="/addBook">
                            DODAJ KSIĄŻKE
                        </Link>
                    </li>
                    <li className={"navbar-list-element"}>
                        <Link className={"main-page-link"}
                              to="/about">
                            O STRONIE
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
