import { AnswerCommentRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentRepository
{
  public answersComment: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.answersComment.push(answerComment)
  }

  async findById(id: string) {
    const answerComment = this.answersComment.find(
      (q) => q.id.toString() === id,
    )

    if (!answerComment) {
      return null
    }

    return answerComment
  }

  async delete(answerComment: AnswerComment) {
    const answerCommentIndex = this.answersComment.findIndex(
      (q) => q.id === answerComment.id,
    )

    this.answersComment.splice(answerCommentIndex, 1)
  }
}
