import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import AllBooksPage from "./page/AllBooksPage";
import AboutPage from "./page/AboutPage";
import BookDetailsPage from "./page/BookDetailsPage";
import AddBookPage from "./page/AddBookPage";
import "./style/BookStyle.css"
import HomePage from "./page/HomePage";


ReactDOM.render((
    <Router>
        <Route path={"/"}> <App/></Route>
        <Switch>
            <Route path={"/about"}> <AboutPage/></Route>
            <Route path={"/books"}> <AllBooksPage/></Route>
            <Route path={"/addBook"}> <AddBookPage/></Route>
            <Route path={"/book/:id"}> <BookDetailsPage/></Route>
            <Route path={"/"}> <HomePage/></Route>
        </Switch>
    </Router>
), document.getElementById("root"));
