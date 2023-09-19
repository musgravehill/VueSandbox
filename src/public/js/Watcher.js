
import { createApp, ref, watch } from 'vue'

export default {
    props: {},
    setup() {
        const todoId = ref(1)
        const todoData = ref(null)

        async function fetchTodoData() {
            todoData.value = null
            const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
            todoData.value = await responce.json()
        }

        // fetchTodoData()  // for init. Or watch.param3= { immediate: true }

        watch(todoId, async (newValue, oldValue) => {
            fetchTodoData()
            console.log('Fetch new data.');
        },
            { immediate: true } // this is param3. For run param2(callback) immediately for init
        )

        return {
            todoId,
            todoData
        }
    },
    // emits: ['event-enlarge-text'],
    // props: ['todoItemProp'], 
    template:
        `
    <h2>Watcher</h2>    
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>    
    `
}
