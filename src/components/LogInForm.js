import React from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { setCurrentUser } from '../authentication'

class LogInForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', touched: false }
  }

  setName = ({ target }) => {
    this.setState({ name: target.value, touched: true })
  }

  get showError() {
    const { name, touched } = this.state

    return name.length === 0 && touched
  }

  get disableLogInButton() {
    return this.state.name.length === 0
  }

  logIn = () => {
    setCurrentUser({ name: this.state.name })

    this.props.history.push('/')
  }

  render() {
    let errors
    if (this.showError) {
      errors = <span className="text-danger">can't be blank</span>
    }

    return (
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Enter your name
            </div>
            <div className="panel-body">
              <div className={classNames('form-group', { 'has-error': this.showError })}>
                <input className="form-control" onChange={this.setName} />
                {errors}
              </div>
              <button
                className="btn btn-block btn-primary"
                disabled={this.disableLogInButton}
                onClick={this.logIn}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LogInForm)
