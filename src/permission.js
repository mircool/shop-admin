import router from './router';
import {useCookies} from '@vueuse/integrations/useCookies'
import {ElNotification} from 'element-plus'
import store from "./store";

const cookies = useCookies();

router.beforeEach(async (to, from, next) => {
    const token = cookies.get('admin-token');

    if (!token && to.path !== '/login') {
        ElNotification.error({
            message: '请先登录'
        })
        next('/login');
    }

    if (token && to.path === '/login') {
        ElNotification.success({
            message: '你已经登录'
        })
        next({path: from.path ? from.path : '/'});
    }

    if (token) {
        await store.dispatch('getinfo')
    }

    next();
})
