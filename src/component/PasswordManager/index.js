import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import ViewPasswordItem from '../ViewPasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteName: '',
    username: '',
    newPassword: '',
    yourPasswordList: [],
    isCheked: false,
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
    event.preventDefault()

    const {websiteName, username, newPassword} = this.state

    const newUserDaetails = {
      websiteName,
      username,
      newPassword,
      id: uuid(),
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
              alt="website"
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
              alt="username"
              className="website-img"
            />
            <hr className="hr-element" />
          </div>
          <input
            type="text"
            value={username}
            placeholder="Enter Username"
            className="input-element"
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="input-and-img-container">
          <div className="img-and-hr-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="website-img"
            />
            <hr className="hr-element" />
          </div>
          <input
            type="password"
            value={newPassword}
            placeholder="Enter Password"
            className="input-element"
            onChange={this.onChangeNewPassword}
          />
        </div>
        <div className="button-container">
          <button className="add-button" type="submit" data-testid="add">
            Add
          </button>
        </div>
      </form>
    )
  }

  renderFormAndImgContainer = () => (
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
          alt="app logo"
          className="lock-desk-top"
        />
      </div>
    </div>
  )

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeletePasswordItem = id => {
    const {yourPasswordList} = this.state
    const updatedpasswordList = yourPasswordList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({
      yourPasswordList: updatedpasswordList,
    })
  }

  toggleCheckBox = () => {
    this.setState(prevState => ({
      isCheked: !prevState.isCheked,
    }))
  }

  getSearcheResult = () => {
    const {yourPasswordList, searchInput} = this.state

    const searchedPassworResults = yourPasswordList.filter(eachItem =>
      eachItem.websiteName.includes(searchInput),
    )
    return searchedPassworResults
  }

  showEmtylistImage = () => (
    <div className="emty-list-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="emty-list-image"
      />
      <p className="no-password-text">No Passwords</p>
    </div>
  )

  showPasswordStatusView = () => {
    const {yourPasswordList, searchInput, isCheked} = this.state
    const searchedViewPasswordList = this.getSearcheResult()

    const viewList = searchInput ? searchedViewPasswordList : yourPasswordList

    if (viewList.length > 0) {
      return viewList.map(eachItem => (
        <ViewPasswordItem
          key={eachItem.id}
          passwordItemDetailes={eachItem}
          isCheked={isCheked}
          deletePasswordItem={this.onDeletePasswordItem}
        />
      ))
    }

    return this.showEmtylistImage()
  }

  renderListPasswordAndSearchContainer = () => {
    const {searchInput, yourPasswordList, isCheked} = this.state

    return (
      <div className="search-and-list-of-password-container">
        <div className="password-count-and-search-input-container">
          <div className="password-and-cout-container">
            <h1 className="your-password-text">Your Passwords</h1>
            <div className="password-count">
              <p className="span">{yourPasswordList.length}</p>
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
          <input
            type="checkbox"
            className="check-box"
            id="checkbox"
            checked={isCheked}
            onChange={this.toggleCheckBox}
          />
          <label htmlFor="checkbox" className="span">
            Show passwords
          </label>
        </div>
        <ul className="view-password-list">{this.showPasswordStatusView()}</ul>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
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
