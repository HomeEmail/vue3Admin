<template>
  <div>
    <h1>val: {{val}}</h1>
    <h1>val+1: {{valPlus}}</h1>
    <button @click="getVal">获取VAL</button>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'default',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      val: state => state.module1.val,
    }),
    ...mapGetters('module1', [
      'valPlus',
    ]),
  },
  methods: {
    ...mapActions('module1', [
      'getVal',
    ]),
  },
};
</script>
