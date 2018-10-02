<template>
    <div>
        <div>{{name}} say Hello World</div>
        <button type="button" @click="emitTest()">测试emit</button>
    </div>
</template>
<script>
export default {
    name: 'hello-world',
    props: {
        'name': {
            default: '',
            type: String
        }
    },
    mounted() {
        console.log('hello-world is start')
    },
    methods: {
        sayHello() {
            console.log(this.name);
        },
        emitTest() {
            this.$emit('onHelloClick', Date.now())
        }
    }
}

</script>
