import GithubClient from '../github-client'

describe('GithubClient', () => {
  const githubClient = new GithubClient('APSL')

  describe('Repo comparator', () => {
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

  describe('Get repos', () => {
    it('should call GitHub API once when repos < 100', (done) => {
      spyOn(githubClient, '_call').and.returnValue(Promise.resolve(new Array(50)))
      githubClient._getRepos()
        .then(repos => {
          expect(repos.length).toBe(50)
          expect(githubClient._call.calls.count()).toBe(1)
          done()
        })
        .catch(error => {throw(error); done()})
    })

    it('should call GitHub API twice when 200 > repos >= 100', (done) => {
      spyOn(githubClient, '_call').and.callFake((path, data) =>
        Promise.resolve(new Array(data.page === 1 ? 100 : 50))
      )
      githubClient._getRepos()
        .then(repos => {
          expect(repos.length).toBe(150)
          expect(githubClient._call.calls.count()).toBe(2)
          done()
        })
        .catch(error => {throw(error); done()})
    })
  })

})
