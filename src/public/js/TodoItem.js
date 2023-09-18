export default {
    props: {
        todoItemProp: Object
    },
    template: `
    <li>{{ todoItemProp.text }}</li>
    `
}
