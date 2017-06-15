import React from 'react'
import PropTypes from 'prop-types'

class VideoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
    };

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title || 'N/A',
    });
  }

  onLinkClick(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    return(
      <a href={{ pathname: '/', query: { id: this.state.id } }} className="hover-pointer">
        <div className="block block-bordered">
          <div className="block-header">
            <h3 className="block-title text-black text-center wordwrap">{this.state.title}</h3>
          </div>
          <div className="block-content">
            <br/>
          </div>
        </div>
      </a>
    )
  }
}

VideoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
};

export default VideoItem
