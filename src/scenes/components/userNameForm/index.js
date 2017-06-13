import React from 'react'
import PropTypes from 'prop-types'
import TextFiledFormGroup from '../../../components/TextFiledFormGroup'
import {connect} from 'react-redux'
import {getUserRepo} from '../../../services/user/actions'

class userNameForm extends React.Component{
  constructor() {
    super();
    this.state = {
      git_user_name:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Validation to handle if any field is left empty
    if (this.state.git_user_name === '') {
      this.context.router.push('/');
    }
    this.props.getUserRepo(this.state);
  }

  render() {
    return (
      <div className="well well-lg text-center">
            <div >

              <TextFiledFormGroup
                name="username"
                value={this.state.git_user_name}
                label="GitHub UserName"
                type="text"
                onChange={this.handleChange}
                className="form-control"
              />

              <div className="form-group row">
                <div className="offset-md-5 ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Check Now!
                  </button>
                </div>
              </div>

            </div>
          </div>

    );
  }
}

userNameForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
     User: state.User,
  };
}

export default connect(mapStateToProps, {
  getUserRepo,
})(userNameForm);
