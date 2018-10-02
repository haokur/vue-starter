<template>
    <div>
        <div class="double-wrap">double eleven</div>
        <div class="double-footer">this is footer</div>
        <main>
            <button @click="showTest()">submit for form</button>
            <hello-world :testName="'haokur'" @onHelloClick="handleHelloClick($event)"></hello-world>
            <div class="form-row">
                <label for="">
                    <span>年龄</span>
                    <input type="text" name="age" value="">
                </label>
            </div>

            <ul class="fruits-list">
                <li v-for="(f,index) in fruits" :key="index" @click="showFruits(f)">{{f}}</li>
            </ul>
            <ul>
                <li>pen</li>
            </ul>
        </main>
    </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import HelloWorldTs from '@/components/HelloWorldTs.vue';

@Component({
    components: {
        'hello-world': HelloWorldTs
    }
})
export default class DoubleEleven extends Vue {
    fruits: string[] = [];
    firstName: string = 'john'
    lastName: string = 'blue'
    time: string = '';

    constructor() {
        super()
        this.fruits = ['apple', 'banana', 'juice']
    }

    // 计算属性
    get userName() {
        return this.firstName + ' ' + this.lastName
    }

    @Watch('time')
    onTimeChange(val: string, oldVal: string) {
        console.log('time is change')
        console.log(`new is ${val} and old is ${oldVal}`)
    }

    mounted() {
        console.log(this)
        console.log('page is start')
        setTimeout(() => {
            this.time = '123'
        }, 1000);
    }

    showTest() {
        console.log('点击测试')
    }

    showFruits(f: any) {
        console.log(f)
    }

    handleHelloClick(msg: any) {
        console.log(msg)
    }
}

</script>
