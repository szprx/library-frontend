import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const BookDetailsPage = () => {

    const {id} = useParams();
    const [hasError, setErrors] = useState(false);
    const [book, setBook] = useState({})

    async function fetchData() {
        const res = await fetch("http://localhost:8080/book/" + id);
        res
            .json()
            .then(res => setBook(res))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <p>{book.releaseYear}</p>
        </div>
    );
}

export default BookDetailsPage;