import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Example Question',
    authortId: new UniqueEntityID(),
    content: 'Example Content',
    ...override,
  })

  return question
}
