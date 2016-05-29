import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import './style/main.less'
import './img/favicon.ico'

import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Cache from './js/cache'
import GithubClient from './js/github-client'
import GithubService from './js/github-service'
import {appReducer} from './js/reducers'
import {getOrganizationInfo, getPopularRepos, getMembers} from './js/actions'

import ReduxApp from './components/app'

let store = createStore(appReducer)

ReactDom.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('app')
)

const cache = new Cache(1000 * 60 * 60)
const githubClient = new GithubClient('APSL')
const githubService = new GithubService(githubClient, cache)

store.dispatch(getOrganizationInfo(githubService))
store.dispatch(getPopularRepos(githubService))
store.dispatch(getMembers(githubService))
