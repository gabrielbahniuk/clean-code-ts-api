import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('Compare Fields Validation', () => {
  test('Should return an InvalidParamError if validation fails ', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_password',
      fieldToCompare: 'wrong_password'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds ', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_password',
      fieldToCompare: 'any_password'
    })
    expect(error).toBeFalsy()
  })
})
