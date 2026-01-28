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

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900">
    <nav class="bg-white border-b p-4 shadow-sm">
      <div class="container mx-auto flex flex-col md:flex-row md:items-center gap-4">
        <h1 class="text-xl font-black text-blue-600 uppercase tracking-tighter">TaskFlow</h1>
        
        <div class="flex flex-wrap gap-2 items-center">
          <button v-for="board in store.boards" :key="board.id"
                  @click="store.currentBoardId = board.id"
                  :class="['px-4 py-1.5 rounded-full text-sm font-medium transition-all', 
                           store.currentBoardId === board.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200']">
            {{ board.name }}
          </button>
          
          <div class="flex border rounded-full overflow-hidden ml-2">
            <input v-model="newBoardName" @keyup.enter="handleCreateBoard"
                   class="px-3 py-1 text-sm outline-none w-32" placeholder="Nuevo tablero...">
            <button @click="handleCreateBoard" class="bg-gray-100 px-3 hover:bg-blue-100 text-blue-600 font-bold">+</button>
          </div>
        </div>
      </div>
    </nav>

    <main class="p-6">
      <div v-if="store.activeBoard" class="flex gap-6 overflow-x-auto pb-8 items-start">
        <KanbanColumn v-for="col in store.activeBoard.columns" :key="col.id" :column="col" />
      </div>
      <div v-else class="text-center py-20 text-gray-400">Selecciona o crea un tablero para empezar</div>
    </main>
  </div>
</template>

<style>
/* Reset de márgenes por defecto de algunos navegadores */
body { margin: 0; padding: 0; }
</style>