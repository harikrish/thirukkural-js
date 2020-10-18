/* eslint-env jest */

const thirukkuralAPI = require('./thirukkural-api')

test('gets all', () => {
  expect(thirukkuralAPI.getAll()).toBeDefined()
})

test('get kurals', () => {
  const allKurals = thirukkuralAPI.getAll()
  expect(thirukkuralAPI.getKurals(allKurals)).toBeDefined()
})
