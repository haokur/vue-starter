
## 写法等价转换

### js 写法

- HelloWorld 组件
```js
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
        }
    }
}
```

- app.vue
```js
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

        }
    }
}
```

### ts 写法

- HelloWorldTs.vue

```ts
import { Prop, Vue } from 'vue-property-decorator'

export default class HelloWorldTs extends Vue {
    @Prop({ default: '' })
    name: string = ''

    sayHello() {
        console.log(this.name)
    }
}
```

- app.vue

```ts
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
}
```

> 注意,`script` 标签需要添加 `lang="ts"`

## 参考地址
[https://segmentfault.com/a/1190000011744210](https://segmentfault.com/a/1190000011744210)
[https://github.com/ffxsam/vue-typescript-cookbook/blob/master/README.md](https://github.com/ffxsam/vue-typescript-cookbook/blob/master/README.md)
[https://segmentfault.com/a/1190000015042711](https://segmentfault.com/a/1190000015042711)
[https://github.com/kaorun343/vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
