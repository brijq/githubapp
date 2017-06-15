import React from 'react'
import UserNameForm from './components/userNameForm'
import {withRouter} from 'react-router-dom'

class mainPage extends React.Component{
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">Welcome to Brian's GitHub App</h1>
          <UserNameForm/>
        </div>
      </div>
    );
  }
}

export default withRouter(mainPage);

