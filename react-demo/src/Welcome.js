import React from 'react';
import './Welcome.css'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date()
        }

        setInterval(() => {
            this.setState({
                data: new Date()
            })
        })
    }
    render() {
        return ( <
            div >
            <
            h1 > hello, { this.props.width } < /h1> <
            h2 > { this.state.data.toLocaleTimeString() } < /h2>

            <
            /div>
        )
    }
}

export default Welcome