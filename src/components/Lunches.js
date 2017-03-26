import React from 'react'
import { connect } from 'react-redux'
import Lunch from './Lunch'

class Lunches extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lunches: [] }
  }

  componentDidMount() {
    fetch('/lunches.json')
      .then(response => response.json())
      .then(lunches => { this.setState({ lunches }) })
  }

  removeLunch = lunchId => {
    this.setState({
      lunches: this.state.lunches.filter(lunch => lunch.id !== lunchId)
    })
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.lunches)}

        {this.state.lunches.map(lunch => (
          <div key={lunch.id} className="col-xs-6">
            <Lunch
              lunch={lunch}
              onCloseClick={() => { this.removeLunch(lunch.id) }}
            />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lunches: state.lunches
})

export default connect(mapStateToProps)(Lunches)
