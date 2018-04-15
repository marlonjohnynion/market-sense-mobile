import * as helpers from '../../src/common/helpers'

describe('App helpres', () => {
  it('inserts item to a new array (shallow copy)', () => {
    const initial = ['1']
    const expected = ['1', '2']
    const test = helpers.insertItemToArray(initial, '2')
    expect(expected).toEqual(test)
  })

  it('gets the total price', () => {
    const expected = 12
    const price = 4
    const qty = 3
    const test = price * qty
    expect(expected).toEqual(test)
  })

  it('rounds numbers to two decimal places', () => {
    const expected = 12.45
    const test = helpers.roundToTwoFixedDecimalPlaces(12.446)
    expect(expected).toEqual(test)
  })

  it('concats the first name and last name of person to get full name', () => {
    const expected = 'Marlon John Ynion'
    const firstName = 'Marlon John'
    const lastName = 'Ynion'
    const test = helpers.getFullName(firstName, lastName)
    expect(expected).toEqual(test)
  })

  it('tests if an input is a number', () => {
    const falsyTest = helpers.isNumber('2ss1')
    const trutyTest = helpers.isNumber('200')
    expect(falsyTest).toBeFalsy()
    expect(trutyTest).toBeTruthy()
  })

  it('generates full address based on arguments acting as address parts', () => {
    const expected = '39 Lopez Jaena Street, Jaro, Iloilo City'
    const line1 = '39 Lopez Jaena Street'
    const line2 = 'Jaro'
    const city = 'Iloilo City'
    const test = helpers.getFullAddress(line1, line2, city)
    expect(test).toEqual(expected)
  })

  it('generates date in words', () => {
    const expected = 'April 9, 2018'
    const test = helpers.getDateInWords(new Date('4-9-2018'))
    expect(test).toEqual(expected)
  })
})
