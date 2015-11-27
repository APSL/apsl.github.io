import shuffle from '../shuffle'

describe('Shuffle', () => {
  it('should change the order of elements in the array', () => {
    const original = Array.apply(null, Array(10)).map((v, i) => i)
    let copy = original.slice()
    shuffle(copy)
    expect(copy).not.toEqual(original)
  })
})
