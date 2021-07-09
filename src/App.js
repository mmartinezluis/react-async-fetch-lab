// create your App component here
import React, { Component } from 'react'


export default class App extends Component {
    state = {
        poepleInSpace: []
    }

    render(){
        return(
            <div>
                {this.state.poepleInSpace.map(person => person.name)}
            </div>
        )
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                poepleInSpace: data.people
            })
        })
    }

}
