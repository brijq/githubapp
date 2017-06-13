import React from 'react'
import UserNameForm from './components/userNameForm'

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

export default mainPage;

