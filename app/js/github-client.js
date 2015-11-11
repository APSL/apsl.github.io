import {checkStatus, parseJSON, buildQueryString} from './fetch-utils'

const HEADERS = {
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json'
}

/** GitHub API client implemented with ES2015 Promises and fetch API */
export default class {

  constructor(organization) {
    this.organization = organization
  }

  // https://developer.github.com/v3/
  _call(path='', data) {
    let url = `https://api.github.com/orgs/${this.organization}${path}`
    if (data) {
      url += '?' + buildQueryString(data)
    }

    return new Promise((resolve, reject) => {
      fetch(url, {'headers': HEADERS})
        .then(checkStatus)
        .then(parseJSON)
        .then(data => resolve(data))
        .catch(e => reject(e))
    })
  }

  // https://developer.github.com/v3/orgs/#get-an-organization
  getOrganizationInfo() {
    return new Promise((resolve, reject) => {
      this._call()
        .then(info => resolve(info))
        .catch(error => reject(error))
    })
  }

  // https://developer.github.com/v3/orgs/members/#members-list
  getMembers() {
    return new Promise((resolve, reject) => {
      this._call('/members')
        .then(members => resolve(members))
        .catch(error => reject(error))
    })
  }

  // https://developer.github.com/v3/repos/#list-organization-repositories
  getPopularRepos(limit, type='source') {
    return new Promise((resolve, reject) => {
      this._call('/repos', {type: type, per_page: 100})
        .then(repos => {
          repos.sort(this._compareReposByPopularity)
          return resolve(repos.slice(0, limit))
        })
        .catch(error => reject(error))
    })
  }

  // Popularity priority: stars > watchers > forks
  _compareReposByPopularity(r1, r2) {
    const KEYS = ['stargazers_count', 'watchers_count', 'forks_count']
    for (let key of KEYS) {
      if (r1[key] < r2[key]) {
        return 1
      } else if (r1[key] > r2[key]) {
        return -1
      }
    }
    return 0
  }

}
