<template>
  <div class="kanban-wrapper">
    <nav class="kanban-nav">
      <div class="nav-container">
        <div class="brand">
          <span class="brand-icon">🚀</span>
          <h1 class="brand-name">TaskFlow</h1>
        </div>
        
        <div class="boards-manager">
          <div class="boards-list">
            <button 
              v-for="board in store.boards" 
              :key="board.id"
              @click="store.currentBoardId = board.id"
              :class="['board-btn', { 'active': store.currentBoardId === board.id }]"
            >
              {{ board.name }}
            </button>
          </div>
          
          <div class="add-board-input">
            <input 
              v-model="newBoardName" 
              @keyup.enter="handleCreateBoard"
              placeholder="Nuevo tablero..."
            >
            <button @click="handleCreateBoard" class="add-btn">+</button>
          </div>
        </div>
      </div>
    </nav>

    <main class="board-area">
      <Transition name="fade" mode="out-in">
        <div v-if="store.activeBoard" :key="store.activeBoard.id" class="columns-container">
          <KanbanColumn 
            v-for="col in store.activeBoard.columns" 
            :key="col.id" 
            :column="col" 
          />
          
          <button class="add-column-ghost">
            + Añadir columna
          </button>
        </div>

        <div v-else class="empty-state">
          <div class="empty-icon">📂</div>
          <h3>No hay tablero seleccionado</h3>
          <p>Selecciona un tablero arriba o crea uno nuevo para organizar tus tareas.</p>
        </div>
      </Transition>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useKanbanStore } from '@/stores/kanban';
import KanbanColumn from '@/components/KanbanColumn.vue';

const store = useKanbanStore();
const newBoardName = ref('');

const handleCreateBoard = () => {
  if (newBoardName.value.trim()) {
    store.addBoard(newBoardName.value);
    newBoardName.value = '';
  }
};
</script>

<style scoped>
/* Estructura Base */
.kanban-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8fafc;
}

/* Navbar */
.kanban-nav {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  flex-shrink: 0;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 900;
  color: #2563eb;
  letter-spacing: -0.05em;
  margin: 0;
}

/* Gestión de Tableros */
.boards-manager {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
}

.boards-list {
  display: flex;
  gap: 0.5rem;
}

.board-btn {
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.board-btn.active {
  background: #2563eb;
  color: white;
}

.add-board-input {
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  overflow: hidden;
  background: white;
}

.add-board-input input {
  border: none;
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  outline: none;
  width: 120px;
}

.add-btn {
  background: #f1f5f9;
  border: none;
  padding: 0 0.8rem;
  color: #2563eb;
  font-weight: bold;
  cursor: pointer;
}

/* Área de Columnas */
.board-area {
  flex-grow: 1;
  overflow: hidden; /* Evita scroll en el body */
  display: flex;
}

.columns-container {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  overflow-x: auto; /* Scroll horizontal solo aquí */
  align-items: flex-start;
  width: 100%;
}

.add-column-ghost {
  min-width: 280px;
  height: 50px;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  background: transparent;
  color: #94a3b8;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-column-ghost:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
  color: #64748b;
}

/* Estado Vacío */
.empty-state {
  margin: auto;
  text-align: center;
  color: #94a3b8;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Animaciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>