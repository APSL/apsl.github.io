export const GET_ORGANIZATION_INFO = 'GET_ORGANIZATION_INFO'
export const GET_POPULAR_REPOS = 'GET_POPULAR_REPOS'
export const GET_MEMBERS = 'GET_MEMBERS'


export const getOrganizationInfo = (githubService) => {
  // TODO: get info from githubService.
  return {type: GET_ORGANIZATION_INFO}
}

export const getPopularRepos = (githubService) => {
  // TODO: get info from githubService.
  return {type: GET_POPULAR_REPOS}
}

export const getMembers = (githubService) => {
  // TODO: get info from githubService.
  return {type: GET_MEMBERS}
}
