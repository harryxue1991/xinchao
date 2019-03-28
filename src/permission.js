import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

router.beforeEach((to, from, next) => {
    NProgress.start()
        if(getToken()) {
            if(store.getters.user) {
                next()
            }else{
                store.dispatch('GetInfo', getToken()).then(res => {
                    console.log(this)
                    // console.log(this.mysocket)
                    // this.socket.emit('update', res.data.user_id);
                    next();
                })
            }
        }else{
            next()
        }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
