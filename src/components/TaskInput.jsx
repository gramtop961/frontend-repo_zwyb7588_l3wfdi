import { useState } from 'react'
import { Plus, Calendar, Flag } from 'lucide-react'

export default function TaskInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title: title.trim(), priority, due_date: dueDate ? new Date(dueDate).toISOString() : null })
    setTitle('')
    setPriority('medium')
    setDueDate('')
  }

  return (
    <form onSubmit={submit} className="bg-white/10 border border-white/10 rounded-xl p-3 md:p-4 flex flex-col md:flex-row gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a festive task..."
        className="flex-1 px-4 py-2 rounded-lg bg-white/80 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-2 py-2">
          <Flag className="w-4 h-4 text-yellow-300" />
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-transparent text-white text-sm focus:outline-none">
            <option className="bg-slate-800" value="low">Low</option>
            <option className="bg-slate-800" value="medium">Medium</option>
            <option className="bg-slate-800" value="high">High</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-2 py-2">
          <Calendar className="w-4 h-4 text-emerald-300" />
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="bg-transparent text-white text-sm focus:outline-none" />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:opacity-95 active:opacity-90 transition">
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
    </form>
  )
}
