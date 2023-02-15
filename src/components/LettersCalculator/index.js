import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lengthLetter: 0}

  onChangeInput = event => {
    this.setState({
      lengthLetter: event.target.value.length,
    })
  }

  render() {
    const {lengthLetter} = this.state

    return (
      <div className="bgContainer">
        <div className="calculatorContainer">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input
            id="input"
            className="inputElement"
            placeholder="Enter the Phrase"
            type="text"
            onChange={this.onChangeInput}
          />
          <div className="showContainer">
            <p className="showPara">No.of letters: {lengthLetter}</p>
          </div>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
