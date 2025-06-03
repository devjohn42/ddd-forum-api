import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface ListRecentQuestionsRequest {
  page: number
}

interface ListRecentQuestionsResponse {
  questions: Question[]
}

export class ListRecentQuestionsUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    page,
  }: ListRecentQuestionsRequest): Promise<ListRecentQuestionsResponse> {
    const questions = await this.questionRepository.findManyRecente({ page })

    return {
      questions,
    }
  }
}
