<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "vue_webpack template",
            message: "This message has been rendered with Vue."
        }
    }
}
</script>
<style lang="scss" scoped>
div {
    text-align: center;
}
</style>
