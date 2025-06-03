import { makeQuestion } from 'test/factories/make-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { ListRecentQuestionsUseCase } from './list-recent-questions'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: ListRecentQuestionsUseCase

describe('List Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new ListRecentQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to list recente questions', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 5, 12) }), // 2º
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 5, 6) }), // 3º
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2025, 7, 21) }), // 1º
    )

    const { questions } = await sut.execute({
      page: 1,
    })

    expect(questions).toEqual([
      expect.objectContaining({ createdAt: new Date(2025, 7, 21) }),
      expect.objectContaining({ createdAt: new Date(2025, 5, 12) }),
      expect.objectContaining({ createdAt: new Date(2025, 5, 6) }),
    ])
  })

  it('should be able to list paginated recente questions', async () => {
    for (let i = 1; i <= 21; i++) {
      await inMemoryQuestionsRepository.create(
        makeQuestion({ createdAt: new Date(2025, 5, 12) }),
      )
    }

    const { questions } = await sut.execute({
      page: 2,
    })

    expect(questions).toHaveLength(1)
  })
})
