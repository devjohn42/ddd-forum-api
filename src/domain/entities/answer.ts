import { randomUUID } from "node:crypto"

interface AnswerProps {
  content: string
  authortId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public authortId: string
  public questionId: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.authortId = props.authortId
    this.questionId = props.questionId
    this.id = id ?? randomUUID()
  }
}