
<script>
export default {
    data() {
        return {
            msg: 'world!',
            color: 'blue',
        }
    }
}
</script>

<template>
    <span class="example">{{ msg }}</span>
</template>

<style scoped>
.example {
    color: v-bind('color');
}
</style>
