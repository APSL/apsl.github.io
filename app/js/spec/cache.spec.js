import Cache from '../cache'

describe('Cache', () => {
  let cache

  beforeEach(() => {
    cache = new Cache(60 * 1000)
  });

  it('.get(key) should return undefined when key does not exist', () => {
    expect(cache.get('does_not_exist')).toBe(undefined)
  })
})
