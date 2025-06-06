import { QuestionCommentRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentRepository
{
  public questionsComment: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.questionsComment.push(questionComment)
  }
}
