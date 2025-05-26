import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authortId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public slug: Slug
  public authortId: string

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authortId = props.authortId
    this.id = id ?? randomUUID()
  }
}