import {checkStatus, parseJSON, buildQueryString} from '../fetch-utils'

describe('Fetch utils', () => {

  describe('checkStatus', () => {
    it('should return the response when status is between 200 and 300', () => {
      const response = {status: 200}
      expect(checkStatus(response)).toEqual(response)
    })
    it('should throw error when status is not between 200 and 300 ', () => {
      let response = {status: 100, statusText: 'Continue'}
      expect(() => checkStatus(response)).toThrowError(Error, response.statusText)

      response = {status: 404, statusText: 'Not Found'}
      expect(() => checkStatus(response)).toThrowError(Error, response.statusText)
    })
  })

  describe('parseJSON', () => {
    it('should call response.json() method', () => {
      const response = jasmine.createSpyObj('response', ['json']);
      parseJSON(response)
      expect(response.json).toHaveBeenCalled()
    })
  })

  describe('buildQueryString', () => {
    it('should return empty string when params has no properties', () => {
      const params = {}
      expect(buildQueryString(params)).toBe('')
    })

    it('should return a valid query string when params has properties', () => {
      const params = {foo: 'bar', baz: 'quux'}
      expect(buildQueryString(params)).toBe('foo=bar&baz=quux')
    })
  })

})
