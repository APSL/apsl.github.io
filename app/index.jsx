import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import './style/main.less'
import './img/favicon.ico'

import React from 'react'
import ReactDom from 'react-dom'

import Cache from './js/cache'
import GithubClient from './js/github-client'
import GithubService from './js/github-service'
import App from './components/app'

const cache = new Cache(1000 * 60 * 60)
const githubClient = new GithubClient('APSL')

const appProps = {
 githubService: new GithubService(githubClient, cache),
 numRepos: 9,
 numMembers: 12
}

ReactDom.render(<App {...appProps} />, document.getElementById('app'))
