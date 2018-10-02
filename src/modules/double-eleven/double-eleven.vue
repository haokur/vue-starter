<template>
    <div>
        <div class="double-wrap">double eleven</div>
        <div class="double-footer">this is footer</div>
        <main>
            <div>
                {{userName}}
            </div>
            <hello-world :name="'haokur'" @onHelloClick="handleHelloClick($event)"></hello-world>
            <button @click="showTest()">submit for form</button>
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
<script>
import HelloWorld from '../../components/HelloWorld'
export default {
    components: {
        'hello-world': HelloWorld
    },
    data() {
        return {
            fruits: ['apple', 'banana', 'pear'],
            firstName: 'john',
            lastName: 'blue',
            time: ''
        }
    },
    computed: {
        userName() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch: {
        'time': function _() {
            console.log(this)
        }
    },
    mounted() {
        console.log('page is start')
        setTimeout(() => {
            this.time = '123'
        }, 1000);
    },
    beforeDestroy() {
        console.log('page is unload')
    },
    methods: {
        showFruits() {

        },
        handleHelloClick(msg) {
            console.log(msg);
        }
    }
}

</script>
