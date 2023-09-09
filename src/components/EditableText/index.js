import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    inputText: '',
    showParagraphEl: false,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSaveBtn = () => {
    this.setState({showParagraphEl: true})
  }

  onClickEditBtn = () => {
    this.setState({showParagraphEl: false})
  }

  render() {
    const {showParagraphEl, inputText} = this.state

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="editable-container">
            <h1 className="heading"> Editable Text Input</h1>
            {showParagraphEl ? (
              <div className="text-container">
                <p> {inputText} </p>
                <button
                  type="button"
                  onClick={this.onClickEditBtn}
                  className="save-btn"
                >
                  {' '}
                  Edit{' '}
                </button>
              </div>
            ) : (
              <div className="input-container">
                <input
                  value={inputText}
                  onChange={this.onChangeInput}
                  className="input"
                  type="text"
                />
                <button
                  type="button"
                  onClick={this.onClickSaveBtn}
                  className="save-btn"
                >
                  {' '}
                  Save{' '}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
