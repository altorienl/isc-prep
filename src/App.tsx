import { useState } from 'react'
import { UNITS } from './data/units'
import { selectQuestions } from './data/questions'
import type { Question, QuizSession } from './types'

type View = 'setup' | 'quiz' | 'results'
type Choice = 'A' | 'B' | 'C' | 'D'

export default function App() {
  const [view, setView] = useState<View>('setup')
  const [selectedUnits, setSelectedUnits] = useState<number[]>([1, 2, 3, 4])
  const [questionCount, setQuestionCount] = useState(10)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<Choice | null>(null)
  const [checked, setChecked] = useState(false)
  const [answers, setAnswers] = useState<Record<number, Choice>>({})
  const [sessions, setSessions] = useState<QuizSession[]>(() => {
    try { return JSON.parse(localStorage.getItem('isc_sessions') || '[]') }
    catch { return [] }
  })

  const toggleUnit = (id: number) =>
    setSelectedUnits(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id].sort()
    )

  const startQuiz = () => {
    const picked = selectQuestions(selectedUnits, questionCount)
    setQuestions(picked)
    setCurrentIndex(0)
    setSelected(null)
    setChecked(false)
    setAnswers({})
    setView('quiz')
  }

  const checkAnswer = () => {
    if (!selected) return
    setChecked(true)
    setAnswers(prev => ({ ...prev, [currentIndex]: selected }))
  }

  const nextQuestion = () => {
    const finalAnswers = { ...answers, [currentIndex]: selected! }

    if (currentIndex === questions.length - 1) {
      const score = questions.reduce(
        (acc, q, i) => acc + (finalAnswers[i] === q.correct ? 1 : 0), 0
      )
      const session: QuizSession = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        units: selectedUnits,
        score,
        total: questions.length,
        answers: finalAnswers,
        questions,
      }
      const updated = [session, ...sessions].slice(0, 20)
      setSessions(updated)
      localStorage.setItem('isc_sessions', JSON.stringify(updated))
      setView('results')
      return
    }

    setCurrentIndex(prev => prev + 1)
    setSelected(null)
    setChecked(false)
  }

  const newQuiz = () => {
    setView('setup')
    setQuestions([])
    setCurrentIndex(0)
    setSelected(null)
    setChecked(false)
    setAnswers({})
  }

  // ── Setup ──────────────────────────────────────────────────
  if (view === 'setup') return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">ISC Prep</h1>
          <p className="text-slate-400 mt-1">CPA ISC Practice Questions</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-5">
          {/* Unit Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Units</label>
            <div className="space-y-2">
              {UNITS.map(unit => (
                <label
                  key={unit.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedUnits.includes(unit.id)
                      ? 'border-indigo-500/60 bg-indigo-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedUnits.includes(unit.id)}
                    onChange={() => toggleUnit(unit.id)}
                    className="mt-0.5 accent-indigo-500"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium">
                      Unit {unit.id}: {unit.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {unit.area} &middot; {unit.weight} &middot; {unit.topics.length} topics
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Questions</label>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map(n => (
                <button
                  key={n}
                  onClick={() => setQuestionCount(n)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    questionCount === n
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startQuiz}
            disabled={!selectedUnits.length}
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
          >
            Start Quiz
          </button>
        </div>

        {/* Recent Sessions */}
        {sessions.length > 0 && (
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-sm font-medium text-slate-400 mb-3">Recent Sessions</h2>
            <div className="space-y-2">
              {sessions.slice(0, 5).map(s => {
                const pct = Math.round((s.score / s.total) * 100)
                return (
                  <div key={s.id} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">
                      {s.date} &mdash; {s.units.map(u => `U${u}`).join(', ')}
                    </span>
                    <span className={pct >= 75 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-rose-400'}>
                      {s.score}/{s.total} ({pct}%)
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  // ── Quiz ───────────────────────────────────────────────────
  if (view === 'quiz' && questions.length > 0) {
    const q = questions[currentIndex]
    const isCorrect = selected === q.correct
    const isLast = currentIndex === questions.length - 1
    const progress = ((currentIndex + (checked ? 1 : 0)) / questions.length) * 100

    return (
      <div className="min-h-screen flex items-start justify-center p-4 pt-12">
        <div className="w-full max-w-lg space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
              U{q.unit} &middot; {q.skill}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question card */}
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4">
            <p className="text-lg font-medium leading-relaxed">{q.question}</p>

            <div className="space-y-2">
              {(['A', 'B', 'C', 'D'] as Choice[]).map(letter => {
                let border = 'border-slate-700 hover:border-slate-500'
                let bg = 'bg-slate-800/50'

                if (checked) {
                  if (letter === q.correct) {
                    border = 'border-emerald-500'
                    bg = 'bg-emerald-500/10'
                  } else if (letter === selected) {
                    border = 'border-rose-500'
                    bg = 'bg-rose-500/10'
                  } else {
                    border = 'border-slate-800'
                    bg = 'bg-slate-800/30'
                  }
                } else if (letter === selected) {
                  border = 'border-indigo-500'
                  bg = 'bg-indigo-500/10'
                }

                return (
                  <button
                    key={letter}
                    onClick={() => !checked && setSelected(letter)}
                    disabled={checked}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${border} ${bg} disabled:cursor-default`}
                  >
                    <span className="font-semibold text-slate-400 mr-2">{letter}.</span>
                    <span className="text-slate-200">{q.choices[letter]}</span>
                  </button>
                )
              })}
            </div>

            {!checked ? (
              <button
                onClick={checkAnswer}
                disabled={!selected}
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <div className="space-y-3">
                <div className={`rounded-lg p-4 border ${
                  isCorrect
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-rose-500/10 border-rose-500/30'
                }`}>
                  <p className={`font-semibold text-sm mb-1 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCorrect ? 'Correct!' : `Incorrect — answer is ${q.correct}`}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>

                <button
                  onClick={nextQuestion}
                  className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-colors"
                >
                  {isLast ? 'See Results' : 'Next Question →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Results ────────────────────────────────────────────────
  if (view === 'results' && sessions.length > 0) {
    const session = sessions[0]
    const pct = Math.round((session.score / session.total) * 100)

    const unitScores: Record<number, { correct: number; total: number }> = {}
    const skillScores: Record<string, { correct: number; total: number }> = {}

    session.questions.forEach((q, i) => {
      if (!unitScores[q.unit]) unitScores[q.unit] = { correct: 0, total: 0 }
      unitScores[q.unit].total++
      if (session.answers[i] === q.correct) unitScores[q.unit].correct++

      if (!skillScores[q.skill]) skillScores[q.skill] = { correct: 0, total: 0 }
      skillScores[q.skill].total++
      if (session.answers[i] === q.correct) skillScores[q.skill].correct++
    })

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg space-y-6">
          {/* Score */}
          <div className="text-center space-y-1">
            <div className={`text-6xl font-bold ${
              pct >= 75 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-rose-400'
            }`}>
              {pct}%
            </div>
            <p className="text-slate-400">
              {session.score} of {session.total} correct
            </p>
          </div>

          {/* By Unit */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4">
            <h2 className="text-sm font-medium text-slate-400">By Unit</h2>
            {Object.entries(unitScores)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([unit, { correct, total }]) => {
                const unitPct = Math.round((correct / total) * 100)
                const unitInfo = UNITS.find(u => u.id === Number(unit))
                return (
                  <div key={unit} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">
                        U{unit}: {unitInfo?.name}
                      </span>
                      <span className={unitPct >= 75 ? 'text-emerald-400' : 'text-amber-400'}>
                        {correct}/{total}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          unitPct >= 75 ? 'bg-emerald-500' : unitPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${unitPct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>

          {/* By Skill */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-3">
            <h2 className="text-sm font-medium text-slate-400">By Skill Level</h2>
            {Object.entries(skillScores).map(([skill, { correct, total }]) => {
              const skillPct = Math.round((correct / total) * 100)
              return (
                <div key={skill} className="flex justify-between text-sm">
                  <span className="text-slate-400">{skill}</span>
                  <span className={skillPct >= 75 ? 'text-emerald-400' : 'text-amber-400'}>
                    {correct}/{total} ({skillPct}%)
                  </span>
                </div>
              )
            })}
          </div>

          <button
            onClick={newQuiz}
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-colors"
          >
            New Quiz
          </button>
        </div>
      </div>
    )
  }

  return null
}
