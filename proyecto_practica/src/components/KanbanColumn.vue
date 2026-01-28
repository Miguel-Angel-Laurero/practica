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

<template>
  <div class="flex-shrink-0 w-80 bg-gray-100 rounded-xl shadow-md flex flex-col max-h-[80vh] border border-gray-200">
    <div class="p-4 bg-white rounded-t-xl border-b flex justify-between items-center">
      <h3 class="font-bold text-gray-700">{{ column.title }}</h3>
      <span class="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-500">{{ column.tasks.length }}</span>
    </div>

    <div class="p-3 overflow-y-auto space-y-3 flex-1">
      <div v-for="task in column.tasks" :key="task.id" 
           class="bg-white p-3 rounded-lg shadow-sm border border-transparent hover:border-blue-300 group relative">
        <p class="text-sm text-gray-600">{{ task.text }}</p>
        <button @click="store.deleteTask(column.id, task.id)" 
                class="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 text-xs italic">
          Eliminar
        </button>
      </div>
    </div>

    <div class="p-3">
      <input v-if="showInput" v-model="newTask" @keyup.enter="submitTask"
             class="w-full p-2 text-sm rounded border mb-2 outline-none focus:ring-2 focus:ring-blue-400"
             placeholder="Escribe y pulsa Enter...">
      <button @click="showInput = !showInput" 
              class="w-full text-sm py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200">
        {{ showInput ? 'Cancelar' : '+ Añadir tarea' }}
      </button>
    </div>
  </div>
</template>