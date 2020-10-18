/* eslint-env jest */

const detailAPI = require('./detail-api')

test('gets all details', () => {
  expect(detailAPI.getAll()).toBeDefined()
})

test('get sections', () => {
  const details = detailAPI.getAll()
  expect(detailAPI.getSections(details)).toBeDefined()
})
