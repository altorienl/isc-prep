export interface Question {
  question: string
  choices: {
    A: string
    B: string
    C: string
    D: string
  }
  correct: 'A' | 'B' | 'C' | 'D'
  explanation: string
  unit: number
  topic: string
  skill: 'Remembering and Understanding' | 'Application' | 'Analysis'
}

export interface QuizSession {
  id: string
  date: string
  units: number[]
  score: number
  total: number
  answers: Record<number, string>
  questions: Question[]
}
