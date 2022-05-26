import React, {Component} from "react";

class AddBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Tytul",
            author: "autor",
            description: "opis",
            releaseYear: 9999
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
                id: 0,
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                releaseYear: this.state.releaseYear
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
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
                    <button type='button'
                            onClick={(e) => this.create(e)}>
                    </button>
                </form>
            </div>
        );
    }
}

export default AddBookPage;