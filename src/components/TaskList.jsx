import { CheckCircle2, Circle, Trash2, Calendar, Flag } from 'lucide-react'

const priorityColor = {
  low: 'bg-emerald-500/20 text-emerald-200',
  medium: 'bg-yellow-500/20 text-yellow-200',
  high: 'bg-red-500/20 text-red-200',
}

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="text-center text-emerald-100/80 py-8">No tasks yet — add your first one!</div>
    )
  }

  return (
    <ul className="divide-y divide-white/10">
      {tasks.map((t) => (
        <li key={t.id} className="flex items-center gap-3 py-3">
          <button onClick={() => onToggle(t.id)} className="text-white">
            {t.completed ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            ) : (
              <Circle className="w-6 h-6 text-white/70" />
            )}
          </button>
          <div className="flex-1">
            <div className={`font-medium ${t.completed ? 'line-through text-white/60' : 'text-white'}`}>{t.title}</div>
            <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
              <span className={`px-2 py-0.5 rounded-full ${priorityColor[t.priority || 'medium']}`}>
                <Flag className="inline w-3 h-3 mr-1" />
                {t.priority}
              </span>
              {t.due_date && (
                <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {new Date(t.due_date).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
          <button onClick={() => onDelete(t.id)} className="text-white/70 hover:text-red-300 transition">
            <Trash2 className="w-5 h-5" />
          </button>
        </li>
      ))}
    </ul>
  )
}
