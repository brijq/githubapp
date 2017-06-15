import React from 'react'
import PropTypes from 'prop-types'

export default class NoResults extends React.Component {
  render() {
    return(
      <div className="text-center">
        <br/>
        <br/>
        <h2>{this.props.text}</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

NoResults.propTypes = {
  text: PropTypes.string.isRequired,
};
