import {createStore} from "vuex";
import {useCookies} from '@vueuse/integrations/useCookies'
import {login, getinfo} from "~/api/manager";

const cookie = useCookies()
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        SET_USERINFO(state, userinfo) {
            state.user = userinfo;
        }
    },
    actions: {
        login({commit}, {username, password}) {
            return new Promise((resolve, reject) => {
                login(username, password).then(res => {
                    cookie.set('admin-token', res.token)
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        },
        getinfo({commit}) {
            return new Promise((resolve, reject) => {
                getinfo().then(res => {
                    commit("SET_USERINFO", res);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        }
    }
})

export default store;