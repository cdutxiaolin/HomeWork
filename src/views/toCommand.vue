<template>
  <div class="tocommand">
    <el-card class="box-card" v-for="item in list" :key="item.label">
    <div slot="header" class="clearfix">
    <span>{{ item.label }}</span>
    </div>
    <div class="text item">{{ item.label }} {{ item.value }}</div>
    </el-card>
    </div>

</template>

<script>

export default {
  name: 'tocommand',
  components: {
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      list: [],
    };
  },
  created() {
    // this.init();
    // this.getList();
    this.getlist();
  },
  methods: {
    async getlist() {
      const { data } = await this.$axios.get('https://api.myjson.com/bins/16su36');
      this.list = data.data;
    },
  },
};
</script>
