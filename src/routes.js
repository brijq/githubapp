import React from 'react'
import {Route} from 'react-router'

import mainPage from './scenes/index'
import repoList from './scenes/components/repolist'


export default <mainPage>
  <Route path="/" component={mainPage}/>
  <Route path="/:username/:repo" component={repoList}/>
</mainPage>
