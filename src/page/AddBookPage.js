import React, {Component} from "react";
import {Link} from "react-router-dom";


class AddBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "Tytul nieznany",
            author: "Autor nieznany",
            description: "Opis książki",
            releaseYear: 9999,
        };

        this.create = this.create.bind(this);
    }

    create(e) {
        e.preventDefault();
        fetch("http://localhost:8080/book/add", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                releaseYear: this.state.releaseYear
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render() {
        return (
            <div>
                <form>
                    <label>TYTUŁ:
                        <input type="text"
                               onChange={(e) => this.handleChange({title: e.target.value})}/>
                    </label>
                    <br/>
                    <label>AUTOR:
                        <input type="text"
                               onChange={(e) => this.handleChange({author: e.target.value})}/>
                    </label>
                    <br/>
                    <label>OPIS:
                        <input type="textarea"
                               onChange={(e) => this.handleChange({description: e.target.value})}/>
                    </label>
                    <br/>
                    <label>ROK WYDANIA
                        <input type="number"
                               min="1900"
                               max={new Date().getFullYear()}
                               onChange={(e) => this.handleChange({releaseYear: e.target.value})}/>
                    </label>
                    <br/>
                    <button className={"add"} type='button'
                            onClick={(e) => {
                                this.create(e);
                                alert("Dodano książkę: " +
                                    "\nTytuł:" + this.state.title +
                                    "\nAutor:" + this.state.author +
                                    "\nOpis:" + this.state.description +
                                    "\nRok wydania:" + this.state.releaseYear);
                            }}>
                        {<Link className={"page-link"} to="/books">Dodaj ksiązkę</Link>}
                    </button>

                </form>
            </div>
        );
    }
}

export default AddBookPage;