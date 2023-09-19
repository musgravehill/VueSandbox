
import { ref, watchEffect } from 'vue'

export default {
    props: {},
    setup() {
        const todoId = ref(1)
        const todoData = ref(null)

        async function fetchTodoData() {
            todoData.value = null
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
            todoData.value = await res.json()
        }

        //  no need { immediate: true }. It run immediately for init
        watchEffect(async () => {
            fetchTodoData()
            console.log('Fetch new data.')
        })

        return {
            todoId,
            todoData
        }
    },
    // emits: ['event-enlarge-text'],
    // props: ['todoItemProp'], 
    template:
        `
    <h2>WatchEffect</h2>   
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>    
    `
}
