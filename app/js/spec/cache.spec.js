import Cache from '../cache'

describe('Cache', () => {
  it('.get(key) should return undefined when key is not in cache', () => {
    expect(new Cache().get('foo')).toBe(undefined)
  })

  it('.get(key) should return data if key is in cache', () => {
    const cache = new Cache(60 * 1000);
    const key = 'foo'
    const data = {bar: 'baz'}
    cache.set(key, data)
    expect(cache.get(key)).toEqual(data)
  })

  it('.get(key) should return undefined if key has expired', (done) => {
    const cache = new Cache(1);
    const key = 'foo'
    cache.set(key, {bar: 'baz'})
    setTimeout(() => {
      expect(cache.get(key)).toBe(undefined)
      done()
    }, 2)
  })
})
