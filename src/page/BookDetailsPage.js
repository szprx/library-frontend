import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const BookDetailsPage = () => {

    const {id} = useParams();
    const [, setErrors] = useState(false);
    const [book, setBook] = useState({})

    async function getBook() {
        const res = await fetch("http://localhost:8080/book/" + id);
        res
            .json()
            .then(res => setBook(res))
            .catch(err => setErrors(err))
    }

    function deleteBook(id) {
        fetch("http://localhost:8080/book/delete/" + id, {
            method: 'DELETE'
        });
    }
    //albo dodoc tu update albo zrobic to na tamtej stronie z lkista wszytskich ksiązek essa
    useEffect(() => {
        getBook();
    });

    return (
        <div>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>{book.releaseYear}</p>
            <br/>
            <button className={"delete"} type='button'
                    onClick={() => {
                        if (window.confirm("Usunąć książkę?")) {
                            deleteBook(id);
                            // alert("Pomyślnie usunięto książkę")
                        }
                    }}>
                {<Link className={"page-link"} to="/books">USUŃ</Link>}
            </button>
        </div>
    );
}

export default BookDetailsPage;