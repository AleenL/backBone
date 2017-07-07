import React from 'react';
import './Welcome.less'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            time: 1
        }

        setInterval(() => {
            this.setState({
                data: new Date()
            })
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }



    render() {
        console.log('进行render操作')
        return ( <
            div >
            <
            h1 > hello, { this.props.width } <
            p > { this.state.data.toLocaleTimeString() } < span > 现在已经过了 { this.state.time }
            秒 < /span> < /p >


            <
            /h1> <

            /
            div >
        )
    }
    componetDidMount() {
        console.log(1)
    }
}

export default Welcome