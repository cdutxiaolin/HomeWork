<template>
<!-- vue 的模板里面，所有的内容要被一个根节点包含起来-->
  <div id="zhiling1">
    <br/>
    <br/>
    {{ title }}
    <br/>
    <br/>
    <br/>
    <br/>
   <input type="text" v-model="todo"/>  <!-- 双向绑定了 'todo'-->
   <button @click="doAdd()">+ 增加</button>
   <br>
   <hr>
   <br>
   <ul>
     <li v-for="(item,index) in list" :key="index">
      {{item}} ------- <button @click="deleteDate(key)">- 删除</button>
     </li>
   </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '使用V-for  遍历的方式   添加删除功能,示例如下',
      todo: '',
      list: [],
    };
  },
  methods: {
    doAdd() {
      this.list.push(this.todo);
      this.todo = '';
    },
    deleteDate(key) {
      this.list.splice(key, 1);// 从key开始删除一个元素
    },
  },
};
</script>
<style>
</style>
