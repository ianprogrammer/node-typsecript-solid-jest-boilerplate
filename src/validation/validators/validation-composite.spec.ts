import { ValidationComposite } from './validation-composite'
import { ValidationSpy } from '@/presentation/test'
import { MissingParamError } from '@/presentation/errors'
import faker from 'faker'

const field = faker.random.word()

type SutTypes = {
  sut: ValidationComposite
  validationSpies: ValidationSpy[]
}

const makeSut = (): SutTypes => {
  const validationSpies = [
    new ValidationSpy(),
    new ValidationSpy()
  ]
  const sut = new ValidationComposite(validationSpies)
  return {
    sut,
    validationSpies
  }
}

describe('Validation Composite', () => {
  test('Deve retornar um erro se validação falhar', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[1].error = new MissingParamError(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(validationSpies[1].error)
  })

  test('Deve retornara o primeiro erro da lista de validação falhar', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[0].error = new Error()
    validationSpies[1].error = new MissingParamError(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(validationSpies[0].error)
  })

  test('Não deve retornar se validação for com sucesso', () => {
    const { sut } = makeSut()
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
