import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import BooksPage from "./page/BooksPage";
import AboutPage from "./page/AboutPage";
import BookDetailsPage from "./page/BookDetailsPage";
import AddBookPage from "./page/AddBookPage";
import UpdateBookPage from "./page/UpdateBookPage";


ReactDOM.render((
    <Router>
        {/*to sie przyda do navbar*/}
        {/*<Route path={"/"} component={App}/>*/}
        {/*<Route path={"/books"} component={BooksPage}/>*/}
        {/*<Route path={"/about"} component={AboutPage}/>*/}
        {/*<Route path={"/addBook"} component={AddBook}/>*/}
        <Switch>
            <Route path={"/about"}> <AboutPage/></Route>
            <Route path={"/books"}> <BooksPage/></Route>
            <Route path={"/addBook"}> <AddBookPage/></Route>
            <Route path={"/book/update/:id"}> <UpdateBookPage/></Route>
            <Route path={"/book/:id"}> <BookDetailsPage/></Route>
            <Route path={"/"}> <App/></Route>
        </Switch>
    </Router>
), document.getElementById("root"));
