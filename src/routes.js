import React from 'react'
import {Route} from 'react-router'

import mainPage from './scenes/index'
import repoList from './scenes/components/repolist'


export default <mainPage>
  <Route exact path="/" component={mainPage}/>
  <Route exact path="/:username/:repo" component={repoList}/>
</mainPage>
