import React, {Component} from "react";
import Book from "./Book";

class App extends Component {

    state = {
        data: [],
        name: "daro"


    }
    //strona glowna z napisem ksiegarnia ->  zobacz ksiazki i orzechoidz do tego widoku
    //zrobic strone z lista nazw ksiazek , klikajac na nazwe przechodzisz do szczegolow ksiazki - autora itd
    //wchodzac do szczegolu ksiazki mozesz ja edytowac lub usunac
    //w glownej liscie ksiazek jest mozliowsc klikniecia linku do dodaj ksiazke
    //moze jakas wyszukiwarka po nazwie

    componentDidMount() {
        fetch('http://localhost:8080/book/all')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    this.setState({data})
                }
            );
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        Ksiazki w ksiegarnii
                    </h1>
                </div>
                {this.state.data.map(book => <Book info={book}/>)}
            </div>
        );
    }
}

export default App;
