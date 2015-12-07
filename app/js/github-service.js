/** GitHub service for an organization with cache */
export default class {

  constructor(githubClient, cache) {
    this.githubClient = githubClient
    this.cache = cache
  }

  getOrganizationInfo() {
    return new Promise((resolve, reject) => {
      const CACHE_KEY = 'organizationInfo'
      const info = this.cache.get(CACHE_KEY)

      if (info && Object.keys(info).length){
        resolve(info)
      } else {
        this.githubClient.getOrganizationInfo()
          .then(info => {
            this.cache.set(CACHE_KEY, info)
            resolve(info)
          })
          .catch(error => {reject(error)})
      }
    })
  }

  getMembers() {
    return new Promise((resolve, reject) => {
      const CACHE_KEY = 'members'
      const members = this.cache.get(CACHE_KEY)

      if (members && members.length) {
        resolve(members)
      } else {
        this.githubClient.getMembers()
          .then(members => {
            this.cache.set(CACHE_KEY, members)
            resolve(members)
          })
          .catch(error => {reject(error)})
      }
    })
  }

  getPopularRepos(limit) {
    return new Promise((resolve, reject) => {
      const CACHE_KEY = `popularRepos_${limit}`
      const repos = this.cache.get(CACHE_KEY)

      if (repos && repos.length) {
        resolve(repos)
      } else {
        this.githubClient.getPopularRepos(limit)
          .then(repos => {
            this.cache.set(CACHE_KEY, repos)
            resolve(repos)
          })
          .catch(error => {reject(error)})
      }
    })
  }

}
