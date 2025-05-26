import { randomUUID } from "node:crypto"

interface QuestionProps {
  title: string
  content: string
  authortId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authortId: string

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.authortId = props.authortId
    this.id = id ?? randomUUID()
  }
}