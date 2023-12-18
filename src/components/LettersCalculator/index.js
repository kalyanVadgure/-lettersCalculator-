import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeTextInput = event => {
    const str = event.target.value
    const countLetters = str.length
    console.log(countLetters)
    this.setState({count: countLetters})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main_container">
        <div className="imageContainer">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="text_input_container">
          <h1>Calculate the Letters you enter</h1>
          <div className="label_input_container">
            <label htmlFor="lettersinput">Enter the phrase</label>
            <input
              className="input_box"
              type="text"
              placeholder="Enter the phrase"
              id="lettersinput"
              onChange={this.onChangeTextInput}
            />
          </div>

          <div className="no_of_letters_container">
            <p>{`No.of letters: ${count}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
