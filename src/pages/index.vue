<template>
  <div>
    index
    <el-button @click="add">{{ count }}</el-button>
    <el-button type="primary" @click="add2">{{ form.count }}</el-button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

let count = ref(1);
let add = () => {
  count.value++;
  console.log(count.value);
};

let form = reactive({ count: 1 });

function add2() {
  form.count++;
  console.log(form.count);
}
</script>
