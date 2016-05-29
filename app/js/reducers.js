import {GET_ORGANIZATION_INFO, GET_POPULAR_REPOS, GET_MEMBERS} from './actions'

const initialState =  {
  avatarUrl: '',
  description: '',
  name: 'APSL',
  htmlUrl: 'https://github.com/APSL',
  publicRepos: undefined,
  repos: [],
  members: [],
  membersUrl: 'https://github.com/orgs/APSL/people',
  location: 'Palma - Spain',
  web: 'http://apsl.net',
  email: 'info@apsl.net',
  error: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ORGANIZATION_INFO:
    return {...state, description: 'Fake description'}
  case GET_POPULAR_REPOS:
    return {...state, repos: []}
  case GET_MEMBERS:
    return {...state, members: []}
  default:
    return state
  }
}
