/** Cache with optional TTL using localStorage */
export default class {

  constructor(ttl) {
    this.ttl = ttl  // TTL in miliseconds
  }

  get(key) {
    try {
      const {timestamp, data} = JSON.parse(localStorage[key] || '{}')

      if (!this.ttl) return data

      if (timestamp && timestamp > Date.now() - this.ttl) {
        return data
      } else {
        window.localStorage.removeItem(key)
        return
      }
    } catch (e) {
      console.error('Cache getter error', e)
      return
    }
  }

  set(key, json) {
    try {
      const data = {'timestamp': Date.now(), 'data': json}
      localStorage[key] = JSON.stringify(data)
    } catch (e) {
      console.error('Cache setter error', e)
    }
  }

}
