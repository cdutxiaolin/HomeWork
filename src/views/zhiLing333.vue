<template>
<!-- vue 的模板里面，所有的内容要被一个根节点包含起来-->
  <div id="zhiling333">
    <div @mouseover="divmouseover" id="div">
      <textarea @mouseover.stop="textareamouseover()">这是一个文件域</textarea>
    </div>
  </div>
</template>

<style>
  #zhiling333 {
          background-color: red;
          height: 300px;
        }
</style>

<script>
export default {
  data() {
    return {
      title: 'V-HTML会解析HTML   V-Text不会解析HTML 示例如下所示',
      message: '<h1>Hello  vue</h1>',
      name: 'admin',
    };
  },
  created() {
    // this.init1();
  },
  methods: {
    divmouseover() {
      alert('鼠标移动到了div上了');
    },
    textareamouseover() {
      alert('鼠标移动到了textarea上了');
    },
  },
};
</script>
