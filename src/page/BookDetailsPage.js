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
        return <button className={"edit"} type='button'>
            {<Link className={"page-link"} to={"/book/update/" + id}>Edytuj</Link>}
        </button>;
    }

    function showBookDetails() {
        return <>
            <p className={"title-author"}>{book.title} - {book.author}</p>
            <p className={"description"}>{book.description}</p>
            <p className={"release-year"}>Data wydania : {book.releaseYear}</p>
        </>;
    }

    return (
        <div className={"book-details"}>
            {showBookDetails()}
            {deleteButton()}
            {redirectionToUpdatePageButton()}
        </div>
    );
}

export default BookDetailsPage;