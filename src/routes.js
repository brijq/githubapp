import React from 'react'
import {Route} from 'react-router'

import mainPage from './scenes/index'
import repoList from './scenes/components/repolist'


export default <mainPage>
  <Route path="/home/:username/:repo" component={repoList}/>
</mainPage>
