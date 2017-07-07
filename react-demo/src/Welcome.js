import React from 'react';
import './Welcome.css'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.Setstate = {
            data: new Date()
        }
    }
    render() {
        return ( <
            div >
            <
            h1 > hello, { this.props.name } < /h1> <
            h2 > { this.Setstate.data.toString() } < /h2>

            <
            /div>
        )
    }
}

export default Welcome