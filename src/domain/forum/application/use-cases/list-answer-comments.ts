import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

interface ListAnswerCommentsRequest {
  answerId: string
  page: number
}

interface ListAnswerCommentsResponse {
  answerComments: AnswerComment[]
}

export class ListAnswerCommentsUseCase {
  constructor(
    private answerCommentsRepository: InMemoryAnswerCommentsRepository,
  ) {}

  async execute({
    answerId,
    page,
  }: ListAnswerCommentsRequest): Promise<ListAnswerCommentsResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return {
      answerComments,
    }
  }
}
