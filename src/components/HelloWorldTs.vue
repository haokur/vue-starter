<template>
    <div>
        <div>{{testName}} say Hello World</div>
        <button type="button" @click="componentHandleClick(emitValue)">测试emit</button>
        <span>{{emitValue.num}}</span>
        <button @click="test()">测试2-{{count}}</button>
    </div>
</template>
<script lang="ts">
import { Prop, Vue, Emit, Component } from 'vue-property-decorator'

@Component
export default class HelloWorldTs extends Vue {
    num: number;
    count = 1;
    emitValue = { num: 1 };

    test() {
        this.count += 1;
        console.log(this)
    }

    @Prop({ default: '' }) testName: string;

    mounted() {
        console.log('hello-world is start')
    }

    sayHello() {
        console.log(this.testName)
    }

    @Emit('onHelloClick')
    componentHandleClick(val: any) {
        this.emitValue.num += 1
    }
}

</script>
