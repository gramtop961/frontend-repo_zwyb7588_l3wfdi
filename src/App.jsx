import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchTasks = async () => {
    const res = await fetch(`${baseUrl}/api/tasks`)
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addTask = async (payload) => {
    const res = await fetch(`${baseUrl}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: payload.title, priority: payload.priority, due_date: payload.due_date })
    })
    if (res.ok) fetchTasks()
  }

  const toggleTask = async (id) => {
    await fetch(`${baseUrl}/api/tasks/${id}/toggle`, { method: 'POST' })
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await fetch(`${baseUrl}/api/tasks/${id}`, { method: 'DELETE' })
    fetchTasks()
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-emerald-700">
      {/* snowy overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_0,rgba(255,255,255,0.18),transparent_30%)]" />
      {/* falling snow (simple) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />

      <div className="relative max-w-2xl mx-auto px-4 py-12">
        <Header />

        <TaskInput onAdd={addTask} />

        <div className="mt-6 bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur">
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>

        <footer className="text-center text-white/70 text-xs mt-8">
          Made with holiday cheer 🎄
        </footer>
      </div>
    </div>
  )
}

export default App
