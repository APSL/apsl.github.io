import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import './style/main.less'
import './img/favicon.ico'

import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import Cache from './js/cache'
import GithubClient from './js/github-client'
import GithubService from './js/github-service'
import {appReducer} from './js/reducers'
import {fetchOrganizationInfo, fetchPopularRepos, fetchMembers} from './js/actions'

import ReduxApp from './components/app'

const store = createStore(appReducer, applyMiddleware(thunkMiddleware))

ReactDom.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('app')
)

const numRepos = 9
const cache = new Cache(1000 * 60 * 60)
const githubClient = new GithubClient('APSL')
const githubService = new GithubService(githubClient, cache)

store.dispatch(fetchOrganizationInfo(githubService))
store.dispatch(fetchPopularRepos(githubService, numRepos))
store.dispatch(fetchMembers(githubService))
