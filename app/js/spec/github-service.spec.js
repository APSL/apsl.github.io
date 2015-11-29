import GithubService from '../github-service'
import GithubClient from '../github-client'
import Cache from '../cache'

describe('GithubService', () => {
  const cache = new Cache()
  const githubClient = new GithubClient('APSL')

  describe('.getOrganizationInfo()', () => {
    const mockData = {foo: "bar"}

    beforeEach(() => {
      spyOn(githubClient, 'getOrganizationInfo').and.returnValue(Promise.resolve(mockData))
    })

    it('should resolve organization JSON data from githubClient if cache is empty', (done) => {
      const githubService = new GithubService(githubClient, cache)
      githubService.getOrganizationInfo()
        .then(data => {
          expect(githubClient.getOrganizationInfo).toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })

    it('should resolve organization JSON data from cache when it is not empty', (done) => {
      spyOn(cache, 'get').and.returnValue(mockData)
      const githubService = new GithubService(githubClient, cache)
      githubService.getOrganizationInfo()
        .then(data => {
          expect(cache.get).toHaveBeenCalled()
          expect(githubClient.getOrganizationInfo).not.toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })
  })


  describe('.getMembers()', () => {
    const mockData = [{foo: "bar"}, {baz: "quux"}]

    beforeEach(() => {
      spyOn(githubClient, 'getMembers').and.returnValue(Promise.resolve(mockData))
    })

    it('should resolve members JSON data from githubClient if cache is empty', (done) => {
      const githubService = new GithubService(githubClient, cache)
      githubService.getMembers()
        .then(data => {
          expect(githubClient.getMembers).toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })

    it('should resolve members JSON data from cache when it is not empty', (done) => {
      spyOn(cache, 'get').and.returnValue(mockData)
      const githubService = new GithubService(githubClient, cache)
      githubService.getMembers()
        .then(data => {
          expect(cache.get).toHaveBeenCalled()
          expect(githubClient.getMembers).not.toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })
  })

  describe('.getPopularRepos()', () => {
    const mockData = [{foo: "bar"}, {baz: "quux"}]
    
    beforeEach(() => {
      spyOn(githubClient, 'getPopularRepos').and.returnValue(Promise.resolve(mockData))
    })

    it('should resolve repos JSON data from githubClient if cache is empty', (done) => {
      const githubService = new GithubService(githubClient, cache)
      githubService.getPopularRepos(mockData.length)
        .then(data => {
          expect(githubClient.getPopularRepos).toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })

    it('should resolve repos JSON data from cache when it is not empty', (done) => {
      spyOn(cache, 'get').and.returnValue(mockData)
      const githubService = new GithubService(githubClient, cache)
      githubService.getPopularRepos(mockData.length)
        .then(data => {
          expect(cache.get).toHaveBeenCalled()
          expect(githubClient.getPopularRepos).not.toHaveBeenCalled()
          expect(data).toEqual(mockData)
          done()
        })
        .catch(error => {throw(error); done()})
    })
  })

})
