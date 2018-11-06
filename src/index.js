import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}
class Index extends Component {
    render () {
        return (
            <div>
                <LikeButton />
                <Dog/>
            </div>
        )
    }
}
class Dog extends Component {
    constructor () {
        super()
        this.state={
            isRunning: false,
            isBarking: false
        }
        /* TODO */
    }


    bark () {
        console.log('bark');
        this.setState({isBarking:true});
        setTimeout(() => this.setState({isBarking:false}),20)
        /* TODO */
    }

    run () {
        console.log('run')
        this.setState({isRunning:true});
        setTimeout(() => this.setState({isRunning:false}),20)
        /* TODO */
    }

    render () {
        return (<div onClick={this.handleTouchDog.bind(this)}>DOG</div>)
    }

    handleTouchDog() {
        this.bark();
        this.run();
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)