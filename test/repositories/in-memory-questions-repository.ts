import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = []

  async create(question: Question) {
    this.questions.push(question)
  }

  async findBySlug(slug: string) {
    const question = this.questions.find((q) => q.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async findById(id: string) {
    const question = this.questions.find((q) => q.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async delete(question: Question) {
    const questionIndex = this.questions.findIndex((q) => q.id === question.id)

    this.questions.splice(questionIndex, 1)
  }
}
