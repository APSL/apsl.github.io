import GithubClient from '../github-client'

describe('GithubClient repo comparator', () => {
  const githubClient = new GithubClient('APSL')

  it('should return 1 when repo1 has less stars than repo2', () => {
    const repo1 = {'stargazers_count': 1}
    const repo2 = {'stargazers_count': 2}
    expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(1)
  })

  it('should return -1 when repo1 has more stars than repo2', () => {
    const repo1 = {'stargazers_count': 2}
    const repo2 = {'stargazers_count': 1}
    expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(-1)
  })

  it('should return 1 when both repos has same stars and repo1 has less watchers than repo2',
    () => {
      const repo1 = {'stargazers_count': 1, 'watchers_count': 1}
      const repo2 = {'stargazers_count': 1, 'watchers_count': 2}
      expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(1)
    }
  )

  it('should return -1 when both repos has same stars and repo1 has more watchers than repo2',
    () => {
      const repo1 = {'stargazers_count': 1, 'watchers_count': 2}
      const repo2 = {'stargazers_count': 1, 'watchers_count': 1}
      expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(-1)
    }
  )

  it(
    'should return 1 when stars and watchers are equal and repo1 has more forks than repo2',
    () => {
      const repo1 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 1}
      const repo2 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 2}
      expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(1)
    }
  )

  it('should return -1 when  stars and watchers are equal and repo1 has less forks than repo2',
    () => {
      const repo1 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 2}
      const repo2 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 1}
      expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(-1)
    }
  )

  it('should return 0 when both repos has same stars, watchers and forks', () => {
    const repo1 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 1}
    const repo2 = {'stargazers_count': 1, 'watchers_count': 1, 'forks_count': 1}
    expect(githubClient._compareReposByPopularity(repo1, repo2)).toBe(0)
  })
})
