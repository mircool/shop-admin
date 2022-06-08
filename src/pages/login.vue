<template>
  <el-row class="bg-indigo-500 min-h-screen">
    <el-col
        :lg="16"
        :md="12"
        :sm="24"
        class="flex justify-center items-center text-white"
    >
      <div>
        <div class="font-bold text-5xl mb-4 text-left">欢迎光临</div>
        <div class="text-gray-200 text-sm">
          这里是使用VUE3开发的一个后台这里是使用VUE3开发的一个后台这里是使用VUE3开发的一个后台
        </div>
      </div>
    </el-col>
    <el-col
        :lg="8"
        :md="12"
        :sm="24"
        class="bg-indigo-50 flex justify-center items-center flex-col"
    >
      <h1 class="font-bold text-3xl text-gray-800">欢迎登陆</h1>

      <div
          class="flex justify-center items-center my-5 text-gray-300 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span class="text-sm">账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form ref="formRef" :model="form" :rules="rules" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              show-password
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
              class="w-[250px]"
              type="primary"
              round
              color="#6366f1"
              @click="onSubmit"
              :loading="loading"
          >登录
          </el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref, reactive, onMounted, onBeforeMount} from "vue";
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {useCookies} from '@vueuse/integrations/useCookies'


import {ElNotification} from 'element-plus'

const router = useRouter()
const cookie = useCookies()
const store = useStore()

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const rules = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};

const formRef = ref(null);
const loading = ref(false)

const onSubmit = () => {

  formRef.value.validate((valid) => {
    if (!valid) {
      console.log('验证错误')
      return false
    }
    loading.value = true
    store.dispatch('login', form).then(res => {
      ElNotification({
        message: '登录成功',
        type: 'success',
        duration: 3000
      })
      router.push('/')
    }).finally(() => {
      loading.value = false
    })
  });
};


onMounted(() => {
  //添加键盘监听事件
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  })
})

onBeforeMount(() => {
  window.removeEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  })
})
</script>
