import React from 'react'
import PropTypes from 'prop-types'

class H2 extends React.Component {
  render() {
    return(
      <h2 className="text-center">
        <span className="fa fa-remove"/>&nbsp;{this.props.message}
      </h2>
    )
  }
}

H2.propTypes = {
  message: PropTypes.string.isRequired
};

export default H2
