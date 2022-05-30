import React, {Component} from "react";
import {Link} from "react-router-dom";


class Book extends Component {

    deleteBook(id) {
        const res = fetch("http://localhost:8080/book/delete/" + id, {method: 'DELETE'});
    }

    render() {
        return (
            <div>
                <li className={"singleBook"}>
                    <Link  className={"page-link"} to={"/book/" + this.props.info.id}> {this.props.info.title}</Link>
                    <button className={"delete"} type='button'
                            onClick={() => {
                                if(window.confirm("Usunąć książkę?"))
                                {
                                    this.deleteBook(this.props.info.id);
                                    alert("Pomyślnie usunięto książkę")
                                    window.location.reload();
                                }
                            }}>
                        USUŃ
                    </button>
                </li>
            </div>)
    };
}

export default Book;