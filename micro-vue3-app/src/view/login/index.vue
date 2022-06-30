<template>
    <AForm
        :model="formState"
        name="basic"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 8 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <AFormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
            <AInput v-model:value.trim="formState.username" placeholder="请输入用户名"></AInput>
        </AFormItem>
        <AFormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
            <AInput v-model:value.trim="formState.password" placeholder="请输入密码"></AInput>
        </AFormItem>
        <AFormItem>
            <AButton type="primary" @click="login" :loading="isLoading.loading">登录</AButton>
        </AFormItem>
    </AForm>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useStore } from 'vuex';
    import { message } from 'ant-design-vue';

    const store = useStore();

    const isLoading = reactive({
        loading: false
    })

    const formState = reactive({
        username: '',
        password: ''
    })

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const login = () => {
        if (!formState.username || !formState.password) return message.error('请输入用户名和密码!');

        isLoading.loading = true
        setTimeout(() => {
            isLoading.loading = false
            store.state.global.mainProps.setGlobalState({ login: { flag: true, info: { username: formState.username, password: formState.password } } })
            message.success('登录成功')
        }, 1000)
    }
</script>

<style lang="scss" scoped>

</style>