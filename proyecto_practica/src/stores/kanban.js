import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
  state: () => ({
    boards: [
      {
        id: 1,
        name: 'Principal',
        columns: [
          { id: 'todo', title: 'Por hacer', tasks: [{ id: 101, text: 'Mi primera tarea' }] },
          { id: 'doing', title: 'En proceso', tasks: [] },
          { id: 'done', title: 'Terminado', tasks: [] }
        ]
      }
    ],
    currentBoardId: 1
  }),

  getters: {
    activeBoard: (state) => state.boards.find(b => b.id === state.currentBoardId)
  },

  actions: {
    addBoard(name) {
      this.boards.push({
        id: Date.now(),
        name,
        columns: [
          { id: 'todo', title: 'Por hacer', tasks: [] },
          { id: 'doing', title: 'En proceso', tasks: [] },
          { id: 'done', title: 'Terminado', tasks: [] }
        ]
      })
    },
    addTask(columnId, text) {
      const column = this.activeBoard.columns.find(c => c.id === columnId)
      if (column) column.tasks.push({ id: Date.now(), text })
    },
    deleteTask(columnId, taskId) {
      const column = this.activeBoard.columns.find(c => c.id === columnId)
      column.tasks = column.tasks.filter(t => t.id !== taskId)
    }
  }
})