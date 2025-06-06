import { AnswerCommentRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentRepository
{
  public answersComment: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.answersComment.push(answerComment)
  }
}
