import {Component} from 'react'

import {v4 as uuid} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteName: '',
    username: '',
    newPassword: '',
    yourPasswordList: [],
  }

  onChangeWebsiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeNewPassword = event => {
    this.setState({
      newPassword: event.target.value,
    })
  }

  onSubmitNewPassword = event => {
    preventDefault(event)

    const {websiteName, username, newPassword} = this.state

    const newUserDaetails = {
      websiteName,
      username,
      newPassword,
      isCheked: false,
      id: uuid(),
      searchInput,
    }

    this.setState(prevState => ({
      yourPasswordList: [...prevState.yourPasswordList, newUserDaetails],
      websiteName: '',
      username: '',
      newPassword: '',
    }))
  }

  formInputContainer = () => {
    const {websiteName, username, newPassword} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitNewPassword}>
        <h1>Add New Password</h1>
        <div className="input-and-img-container">
          <div className="img-and-hr-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="img"
              className="website-img"
            />
            <hr className="hr-element" />
          </div>
          <input
            type="text"
            value={websiteName}
            placeholder="Enter Website"
            className="input-element"
            onChange={this.onChangeWebsiteName}
          />
        </div>
        <div className="input-and-img-container">
          <div className="img-and-hr-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="img"
              className="website-img"
            />
            <hr className="hr-element" />
          </div>
          <input
            type="text"
            value={username}
            placeholder="Enter Website"
            className="input-element"
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="input-and-img-container">
          <div className="img-and-hr-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="img"
              className="website-img"
            />
            <hr className="hr-element" />
          </div>
          <input
            type="text"
            value={newPassword}
            placeholder="Enter Website"
            className="input-element"
            onChange={this.onChangeNewPassword}
          />
        </div>
        <div>
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
      </form>
    )
  }

  renderFormAndImgContainer = () => {
    return (
      <div className="form-and-img-container">
        <div className="lock-sm-mobile-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="lock-sm-mobile"
          />
        </div>
        {this.formInputContainer()}
        <div className="lock-lg-desk-top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="lock-desk-top"
          />
        </div>
      </div>
    )
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  renderListPasswordAndSearchContainer = () => {
    const {searchInput} = this.state
    return (
      <div className="search-and-list-of-password-container">
        <div className="password-count-and-search-input-container">
          <div className="password-and-cout-container">
            <h1 className="your-password-text">Your Password</h1>
            <div className="password-count">
              <span className="span">0</span>
            </div>
          </div>
          <div className="input-and-img-container">
            <div className="img-and-hr-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-img"
              />
              <hr className="hr-element" />
            </div>
            <input
              type="search"
              value={searchInput}
              placeholder="Search"
              className="input-element"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr />
        <div className="check-box-container">
          <input type="check-box" className="check-box" id="checkbox" />
          <lable id="checkbox" className="span">
            Show password
          </lable>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="palog"
            className="password-logo"
          />
          {this.renderFormAndImgContainer()}
          {this.renderListPasswordAndSearchContainer()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
