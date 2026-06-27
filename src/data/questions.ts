import type { Question } from '../types'
import { unit1Questions } from './questions-unit1'
import { unit2Questions } from './questions-unit2'
import { unit3Questions } from './questions-unit3'
import { unit4Questions } from './questions-unit4'

export const allQuestions: Question[] = [
  ...unit1Questions,
  ...unit2Questions,
  ...unit3Questions,
  ...unit4Questions,
]

export function selectQuestions(units: number[], count: number): Question[] {
  const pool = allQuestions.filter(q => units.includes(q.unit))
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
