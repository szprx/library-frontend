import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AllBooksPage = () => {

    const [, setErrors] = useState(false);
    const [books, setBooks] = useState([]);

    async function getAllBooks() {
        const res = await fetch("http://localhost:8080/book/all");
        res
            .json()
            .then(res => setBooks(res))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        getAllBooks();
    })


    return (
        <div className={"book-details"}>
            <ul>{books.map((book) => (
                <li className={"singleBook"}>
                    <Link className={"page-link"}
                          to={"/book/" + book.id}>
                        {book.title}
                    </Link>
                </li>
            ))}
            </ul>
        </div>);
}

export default AllBooksPage;
