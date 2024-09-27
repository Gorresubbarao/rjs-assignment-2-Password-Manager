import './index.css'

const ViewPasswordItem = props => {
  const {passwordItemDetailes, isCheked, deletePasswordItem} = props
  const {id, websiteName, username, newPassword} = passwordItemDetailes
  const websiteIntial = websiteName ? websiteName[0].toUpperCase() : ''

  const onClickDelete = () => {
    deletePasswordItem(id)
  }

  const password = isCheked ? (
    newPassword
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li className="view-password-item">
      <div className="webintial-and-user-data-container">
        <div className="website-intial-container">
          <p className="website-intial">{websiteIntial}</p>
        </div>
        <div className="user-data-container">
          <p className="website-text">{websiteName}</p>
          <p className="website-text">{username}</p>
          <p className="website-text">{password}</p>
        </div>
      </div>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default ViewPasswordItem
