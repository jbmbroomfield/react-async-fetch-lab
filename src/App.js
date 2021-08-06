import React from "react"

class App extends React.Component {
    
    state = {
        people: []
    }

    componentDidMount() {
        const url = "http://api.open-notify.org/astros.json"
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                ...this.state,
                people: json.people
            })
        })
    }

    render() {
        return (
            <div>
                <ul>{this.state.people.map(person => <li>{person.name}</li>)}</ul>
            </div>
        )
    }

}


export default App