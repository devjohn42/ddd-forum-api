import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public questionsComment: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.questionsComment.push(questionComment)
  }
}
