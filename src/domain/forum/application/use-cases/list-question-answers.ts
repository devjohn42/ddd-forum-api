import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface ListQuestionAnswersRequest {
  questionId: string
  page: number
}

interface ListQuestionAnswersResponse {
  answers: Answer[]
}

export class ListQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: ListQuestionAnswersRequest): Promise<ListQuestionAnswersResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
