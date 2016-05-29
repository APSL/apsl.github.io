import shuffle from './shuffle'

// Errors

export const SET_ERROR = 'SET_ERROR'
export const setError = (error) => {
  console.error(error)
  return {type: SET_ERROR, error: true, payload: error}
}


// Repositories

export const fetchPopularRepos = (githubService, numRepos) => {
  return (dispatch) => {
    githubService.getPopularRepos(numRepos)
      .then(repos => dispatch(setPopularRepos(repos)))
      .catch(error => dispatch(setError(error)))
  }
}

export const SET_POPULAR_REPOS = 'SET_POPULAR_REPOS'
export const setPopularRepos = (repos) => {
  return {type: SET_POPULAR_REPOS, payload: {repos: repos}}
}


// Members

export const fetchMembers = (githubService) => {
  return (dispatch) => {
    githubService.getMembers()
      .then(members => {
        shuffle(members)
        dispatch(setMembers(members))
      })
      .catch(error => dispatch(setError(error)))
  }
}

export const SET_MEMBERS = 'SET_MEMBERS'
export const setMembers = (members) => {
  return {type: SET_MEMBERS, payload: {members: members}}
}


// Organization

export const fetchOrganizationInfo = (githubService) => {
  return (dispatch) => {
    githubService.getOrganizationInfo()
      .then(data => dispatch(setOrganizationInfo(data)))
      .catch(error => {
        dispatch(setDefaultAvatar())
        dispatch(setError(error))
      })
  }
}

export const SET_ORGANIZATION_INFO = 'SET_ORGANIZATION_INFO'
export const setOrganizationInfo = (data) => {
  return {type: SET_ORGANIZATION_INFO, payload: data}
}

export const setDefaultAvatar = () => {
  return {'avatarUrl': 'https://avatars.githubusercontent.com/u/469968?v=3&s=150'}
}
