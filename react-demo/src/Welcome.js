import React from 'react';
import './Welcome.less'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            time: 0
        }
        var i = 1;
        console.log("初始化完成")
        setInterval(() => {
            this.setState({
                data: new Date()
            })
            this.setState({
                time: i--
            })
        }, 1000)
    }
    componentWillMount() {
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
        console.log('已经完成了！！')
    }
}

export default Welcome