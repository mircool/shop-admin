<template>
    <div>
        <el-result
        icon="warning"
        title="404"
        sub-title="找不到页面了"
      >
        <template #extra>
          <el-button type="primary"  @click="$router.push('/')">Back</el-button>
        </template>
      </el-result>
    </div>
</template>