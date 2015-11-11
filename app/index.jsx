import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import './style/main.less'
import './img/favicon.ico'

import 'babel/polyfill'

import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import GithubService from './js/github-service'


const githubService = new GithubService('apsl')

ReactDom.render(<App githubService={githubService} />, document.getElementById('app'))
