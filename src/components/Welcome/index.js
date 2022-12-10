// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {name: false}

  changeText = () => {
    const {name} = this.state
    this.setState({name: !name})
  }

  render() {
    const {name} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>

        {name ? (
          <button type="button" className="btn" onClick={this.changeText}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="btn" onClick={this.changeText}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
