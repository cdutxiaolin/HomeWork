<template>
  <div class="toDo_List">
    <ol>
      <li v-for="(item,index) in list" :key="index" @click="finishHandler(item)">
        <del v-if="item.done">{{ item.text }}</del>
        <span v-else>{{ item.text }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'toDoList',
  data() {
    return {
      list: [
        { done: false, text: '学习springboot' },
        { done: false, text: '学习vue' },
        { done: false, text: '学习nodejs' },
        { done: false, text: '学习js' },
      ],
    };
  },
  methods: {
    finishHandler(item) {
      this.item.done = !item.done;
    },
  },
};
</script>
