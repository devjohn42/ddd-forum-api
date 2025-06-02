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

  async save(answer: Answer) {
    const answerIndex = this.answers.findIndex((a) => a.id === answer.id)

    this.answers[answerIndex] = answer
  }

  async delete(answer: Answer) {
    const answerIndex = this.answers.findIndex((a) => a.id === answer.id)

    this.answers.splice(answerIndex, 1)
  }
}
