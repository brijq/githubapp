import React from 'react'
import PropTypes from 'prop-types'
import TextFiledFormGroup from '../../../components/TextFiledFormGroup'
import {connect} from 'react-redux'
import {getUserRepo} from '../../../services/user/actions'
import VideoItem from './RepoItem'
import NoResults from '../../../components/Errors/NoResults'



class UserNameForm extends React.Component{
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
      console.log(this.state.git_user_name);
    }
    this.props.getUserRepo(this.state.git_user_name);
  }

  render() {
    return (
      <div className="well well-lg text-center">
        <form onSubmit={this.handleSubmit}>

          <TextFiledFormGroup
            onChange={this.handleChange}
            value={this.state.git_user_name}
            type="text"
            name="git_user_name"
            label="Git UserName"
            placeholder="Please Enter GitHub Username"
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
        </form>

        <div className="row">
          {this.props.User.repos.length === 0 ? <NoResults text="No Results"/> : null }
          {this.props.User.repos.map((repo) => {
            return(
              <div key={repo.id} className="col-md-4">
                <VideoItem
                  id={Number(repo.id)}
                  title={repo.name}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

UserNameForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
     User: state.User,
  };
}

export default connect(mapStateToProps, {
  getUserRepo,
})(UserNameForm);
