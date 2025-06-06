import { QuestionCommentRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentRepository
{
  public questionsComment: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.questionsComment.push(questionComment)
  }

  async findById(id: string) {
    const questionComment = this.questionsComment.find(
      (q) => q.id.toString() === id,
    )

    if (!questionComment) {
      return null
    }

    return questionComment
  }

  async delete(questionComment: QuestionComment) {
    const questionCommentIndex = this.questionsComment.findIndex(
      (q) => q.id === questionComment.id,
    )

    this.questionsComment.splice(questionCommentIndex, 1)
  }
}
