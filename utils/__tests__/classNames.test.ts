import classNames from '../classNames'

describe('classNames', () => {
  it('receives no strings. Should return empty string', () => {
    const result = classNames()
    expect(result).toBe('')
  })

  it('receives only one string. Should return that string', () => {
    const result = classNames('a')
    expect(result).toBe('a')
  })

  it('receives two strings. Should return certain string', () => {
    const result = classNames('a', 'b')
    expect(result).toBe('a b')
  })

  it('receives three strings. Should return certain string', () => {
    const result = classNames('a', 'b', 'c')
    expect(result).toBe('a b c')
  })

  it('recieves only a false. Should return empty string', () => {
    const result = classNames(false)
    expect(result).toBe('')
  })

  it('recieves strings and falses. Should return certain string', () => {
    const result = classNames('a', false, 'b', false, false, 'c', 'd')
    expect(result).toBe('a b c d')
  })
})
