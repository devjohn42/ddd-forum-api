import { PaginationParams } from '@/core/share-repo/pagination-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public answers: Answer[] = []

  async create(answer: Answer) {
    this.answers.push(answer)
  }

  async findById(id: string) {
    const answer = this.answers.find((a) => a.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async findManyByAnswerId(questionId: string, { page }: PaginationParams) {
    const answers = this.answers
      .filter((a) => a.questionId.toString() === questionId) // retorno pela data mais recente
      .slice((page - 1) * 20, page * 20)

    return answers
  }

  async save(answer: Answer) {
    const answerIndex = this.answers.findIndex((a) => a.id === answer.id)

    this.answers[answerIndex] = answer
  }

  async delete(answer: Answer) {
    const answerIndex = this.answers.findIndex((a) => a.id === answer.id)

    this.answers.splice(answerIndex, 1)
  }
}
