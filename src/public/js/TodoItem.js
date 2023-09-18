export default {
    props: {
        todoItemProp: Object
    },
    //emits: ['event-enlarge-text'],
    //  props: ['todoItemProp'], 
    template: `
    <li>
    {{ todoItemProp.text }}
    <button @click="$emit('event-enlarge-text')">Enlarge text</button>
    </li>
    `
}
