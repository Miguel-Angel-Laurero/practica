<template>
  <div class="flex-shrink-0 w-80 bg-gray-100 rounded-xl shadow-md flex flex-col max-h-[85vh] border border-gray-200">
    <div class="p-4 bg-white rounded-t-xl border-b flex justify-between items-center flex-shrink-0">
      <h3 class="font-bold text-gray-700">{{ column.title }}</h3>
      <span class="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-500 font-semibold">
        {{ column.tasks.length }}
      </span>
    </div>

    <div class="p-3 overflow-y-auto space-y-3 flex-1 custom-scrollbar">
      <TransitionGroup name="list">
        <div v-for="task in column.tasks" :key="task.id" 
             class="bg-white p-3 rounded-lg shadow-sm border border-transparent hover:border-blue-400 group relative transition-all duration-200 cursor-grab active:cursor-grabbing">
          
          <p class="text-sm text-gray-600 leading-relaxed pr-6">{{ task.text }}</p>
          
          <button @click="store.deleteTask(column.id, task.id)" 
                  class="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </TransitionGroup>

      <div v-if="column.tasks.length === 0" class="text-center py-4 text-gray-400 text-xs italic">
        No hay tareas aquí
      </div>
    </div>

    <div class="p-3 bg-gray-50 rounded-b-xl border-t flex-shrink-0">
      <div v-if="showInput" class="mb-2">
        <textarea 
          v-model="newTask" 
          @keyup.enter.exact.prevent="submitTask"
          @keyup.esc="showInput = false"
          rows="2"
          class="w-full p-2 text-sm rounded-lg border border-blue-300 outline-none focus:ring-2 focus:ring-blue-400 shadow-inner resize-none"
          placeholder="¿Qué hay que hacer?"
          autofocus
        ></textarea>
        <div class="flex gap-2 mt-1">
          <button @click="submitTask" class="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700">Añadir</button>
          <button @click="showInput = false" class="text-gray-500 px-3 py-1 text-xs hover:underline">Cancelar</button>
        </div>
      </div>

      <button v-if="!showInput" @click="showInput = true" 
              class="w-full text-sm py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-white hover:border-blue-300 hover:text-blue-500 transition-all duration-200 font-medium">
        + Añadir tarea
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useKanbanStore } from '@/stores/kanban';

const props = defineProps(['column']);
const store = useKanbanStore();
const newTask = ref('');
const showInput = ref(false);

const submitTask = () => {
  if (!newTask.value.trim()) return;
  store.addTask(props.column.id, newTask.value);
  newTask.value = '';
  showInput.value = false;
};
</script>

<style scoped>
/* Scrollbar fino para las columnas */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

/* Animaciones de la lista */
.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>