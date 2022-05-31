import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const BookDetailsPage = () => {

    const {id} = useParams();
    const [book, setBook] = useState({})
    const [, setErrors] = useState(false);

    async function getBook() {
        const res = await fetch("http://localhost:8080/book/" + id);
        res
            .json()
            .then(res => setBook(res))
            .catch(err => setErrors(err))
    }

    function deleteBook() {
        fetch("http://localhost:8080/book/delete/" + id, {
            method: 'DELETE'
        });
    }

    useEffect(() => {
        getBook();
    });

    function deleteButton() {
        return <button className={"delete"} type='button'
                       onClick={() => {
                           if (window.confirm("Usunąć książkę?")) {
                               deleteBook();
                           }
                       }}>
            {<Link className={"page-link"} to="/books">Usuń</Link>}
        </button>;
    }

    function redirectionToUpdatePageButton() {
        return <button className={"edit"} type='button'
                       onClick={() => {
                       }}>
            {<Link className={"page-link"} to={"/book/update/" + id}>Edytuj</Link>}
        </button>;
    }

    function showBookDetails() {
        return <>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>{book.releaseYear}</p>
        </>;
    }

    return (
        <div>
            {showBookDetails()}
            <br/>
            {deleteButton()}
            {redirectionToUpdatePageButton()}
        </div>
    );
}

export default BookDetailsPage;