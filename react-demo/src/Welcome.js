import React from 'react';
import './Welcome.less'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            test: 1
        }
    }
    componentWillMount() {
        this.setState({
            data: new Date(),
            test: 'componentWillMount'
        })
        console.log('我将要插入文档啦！')
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
    componentDidMount() {
        this.setState({
            data: new Date(),
            test: 'componentDidMount'
        })
        console.log('已经完成了！！')
    }


    componentDidUpdate() {
        this.setState({
            data: new Date(),
            test: 'componentDidUpdate'
        })
    }

    componentWillUnmount() {
        console.log('我已经死了 -A-')
    }
}

export default Welcome