import React from "react";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className={"container"}>
            <Link className={"page-link"}
                  to="/">
                <h1 className={"page-title"}>KSIEGARNIA</h1>
            </Link>
            <ul className={"home-list"}>
                <li className={"navbar"}>
                    <Link className={"main-page-link"}
                          to="/books">
                        LISTA KSIĄŻEK
                    </Link>
                </li>
                <li className={"navbar"}>
                    <Link className={"main-page-link"}
                          to="/addBook">
                        DODAJ KSIĄŻKE
                    </Link>
                </li>
                <li className={"navbar"}>
                    <Link className={"main-page-link"}
                          to="/about">
                        O NAS
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default App;
