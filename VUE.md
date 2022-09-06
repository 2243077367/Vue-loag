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





