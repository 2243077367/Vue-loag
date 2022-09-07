## Vue

#### VUE的优缺点

优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开

缺点：单页面不利于seo，不支持IE8以下，首屏加载时间长

#### 为什么说Vue是一个渐进式框架？

渐进式：通俗点讲就是，你想用啥你就用啥，咱也不强求你。你想用component就用，不用也行，你想用vuex就用，不用也可以

#### Vue和JQuery的区别在哪？为什么放弃JQuery用Vue？

- 1.jQuery是直接操作DOM，Vue不直接操作DOM，Vue的数据与视图是分开的，Vue只需要操作数据即可
- 2.在操作DOM频繁的场景里，jQuery的操作DOM行为是频繁的，而Vue利用虚拟DOM的技术，大大提高了更新DOM时的性能
- 3.Vue中不倡导直接操作DOM，开发者只需要把大部分精力放在数据层面上
- 4.Vue集成的一些库，大大提高开发效率，比如Vuex，Router等

### 基础

#### 模板语法

1.{{}} 直接在标签里，data下写数据 ---插值语法

2.v-bind:href="xxx"指令语法 （标签属性，标签体内容，绑定事件）

#### 数据绑定

<!--简写 v-bind 简写： v-on简写@click  -->

1.单向 v-bind 只能从data流入页面 

2.双向 v-model 用于表单元素 相当于

v-bind:value="something"  

v-on:input="something = $event.target.value"

#### 指令

v-on 绑定事件 可传参（）不加小括号默认不传参

v-bind 动态绑定变量

v-if if判断

v-else if判断

v-html 会直接输出结果 但有安全性，导致xss攻击，不可用在用户提交上

v-text 和{{}}一样，会把h1标签转义输出。即原模原样输出

v-cloak 使用css配合可解决网页展示{{}}问题

v-once 初始化动态渲染静态内容数据改变不会引起v-once ,只渲染一次（性能优化）

v-pre跳过所在节点过程，加快编译

v-show/v-hide 控制显示和隐藏

v-slot 缩写为# 插槽名

v-for 循环列表 v-for="(item,index) in xxx" :key="yyy" 唯一标识

#### 修饰符

（前面需要加个.）

lazy 当光标离开输入框，v-model的值value才会改变

trim 去掉空格

number 值转number 先输入数字，只去前面，输入字母，number 就无效了

stop 阻止冒泡

capture 由外网内捕获

self 只有点击事件绑定的本身才会触发事件

once 只执行一次

prevent 阻止默认行为（a标签的跳转）

native 加在自定义组件的事情上，保证事件可以执行

passive 相当于给onscrool事件整了一个lazy符

camel 确保绑定参数呗识别为驼峰命名

sync 父子组件传值，子组件更新值，修饰符可简写

.left/right/middle 鼠标左中右触发事件

#### data与el两种写法

el :new Vue 配置 2.创建实例通过vm.$mount('#root')指定

data 对象/函数 组件必须函数实，有return 不能写箭头函数，否则不是vue实例

#### 数据代理

Object.defineproperty(person,'age'{

​	get( ){ }

​	set( ){ }

​	enumerable:true//是否枚举

​	writable:true //修改

​	configurable:true //是否被删除

})

#### 样式修改 动态class

    <p :class="[isArt? 'act': 'err']">这是数组写法</p>
    <p :style="{color:aa}">这是对象写法</p>

数组下面单独样式，对象在data配置样式

#### methods写方法

#### computed 计算属性

#### wacth深度监听

watch: {    value () {        *// do something*    } }---基本数据类型

watch: { 

​	  obj: {       handler () { // 执行回调          // do something       }, 

​      deep: true, // 是否进行深度监听       

​	  immediate: true // 是否初始执行handler函数    } }

#### 组件

全局组件 ，main.js里 Vue.component(' aa',引用组件名)第一个参数是组件名,第二个参数是组件定义

局部组件

import 组件名 from '路径'

components :组件名 

##### 传值

父传子 父组件定义名，子组件props进行接受，可以指定类型

子传给 子组件使用`$emit`+事件对父组件进行传值

组件的v-modal定义：

​    如果自定义属性叫value，派发自定义事件叫input，

​    而且自定义事件要更新value，可以缩写组件双向绑定

使用`$refs`获取组件实例，进而获取数据

#### 插槽

• 多个插槽，命名区分 slot(name="***")

• 不带 name 的 slot 隐含命名为 default

• 在 template 元素上使用 v-slot 指令指定内容

• 插槽内容和父级模板有一样的作用域

#### 生命周期

四个阶段，八个函数，每个阶段前一个后一个函数

创建实例this>挂载/渲染dom  更新导致刷新视图>销毁this移除相对性的dom

beforeCreate（）{}创建前			created（）{} 创建好了

beforeMount（）{}挂载前			mounted（）{}挂载好了

beforeUpdate（）{}更新前		   updated（）{}更新好了

beforeDestroy（）{}销毁前		  destroyed（）{}销毁后

使用最频繁

  created:掉接口,设置data，调用方法

  mounted:操作dom，读取节点

  beforeDestory: 停掉定时器，解绑自定义事件

#### 动画

node 内置安装 transition动画库

<transition></transition>  标签

v- 是类名的默认前缀 如果 transition 定义了 name，name 会替代 v

v-enter、v-enter-active、v-enter-to 开始

v-leave、v-leave-active、v-leave-to  离开

#### VUE X

State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。

Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。

Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。

Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。

Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

#### 路由

##### 路由跳转

hash 模式，使用 URL hash 值  /#/home 

history 模式，HTML5 History API	 /home 

//$router : 是路由操作对象，只写对象 

//$route : 路由信息对象，只读对象

直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示

1. <router-link to="/pt?age=9">

2.  <button @click="go2">跳转到页面22222</button> 绑定事件 ，methods定义

   go2(){

   ​       this.$router.push('/pt?age=21');//直接写

   ​       第一种传参

   ​       this.$router.push({

   ​        name:'pt',

   ​        query:{

   ​          age:100,

   ​        }

   ​      })

   第二种传值

   go1(){

   ​      this.$router.push({

   ​        name:'po',

   ​        params:{

   ​          age:20,

   ​        }

   ​      })

   ​    }

   }

   ##### 路由嵌套

   {

     path: '/my',

     component: () => import('./MyView.vue'),

     redirect:'/my/tab-a', //页面重定向

     //嵌套/子路由在父组件增加childred

     children:[{

      //不能写/要不然就是一级路由

      path:'tab-a',

      component:()=> import('./TabA.vue')

     },

   ##### 路由守卫

   beforeEach((to,from,next)=>{})-------------全局前置守卫最常用来做路由鉴权

   afterEach((to,from)=>{})------------------------全局后置钩子常用来做统一的页面

   进入后逻辑，比如处理滚动等

   #### 

   

   
