import {
  SET_ORGANIZATION_INFO,
  SET_POPULAR_REPOS,
  SET_MEMBERS,
  SET_ERROR
} from './actions'

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
  case SET_ORGANIZATION_INFO:
    return {
      ...state,
      avatarUrl: action.payload.avatar_url,
      description: action.payload.description,
      name: action.payload.name,
      publicRepos: action.payload.public_repos,
      htmlUrl: action.payload.html_url,
      location: action.payload.location,
      web: action.payload.blog,
      email: action.payload.email
    }
  case SET_POPULAR_REPOS:
    return {...state, repos: action.payload.repos}
  case SET_MEMBERS:
    return {...state, members: action.payload.members}
  case SET_ERROR:
    return {...state, error: true}
  default:
    return state
  }
}
