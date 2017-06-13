import React from 'react'
import {Route} from 'react-router'

import mainPage from './scenes/index'
import repoList from './scenes/components/repolist'



export default <mainPage>
  <Route exact path="users/:username/repos" component={repoList}/>
</mainPage>
