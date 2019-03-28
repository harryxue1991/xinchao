<template>
    <div class="topbar">
        <div class="topbar-user" v-if="user">
            <span>{{user.name}}</span>
            <span class="register" @click="logout">退出</span>
        </div>

        <div class="topbar-user" v-else>
            <span>您还没登入</span>
            <span class="register" @click="login">登入</span>
        </div>

        <my-login :dialogVisible.sync='show'></my-login>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import mylogin from '@/components/login'

export default {
    name: 'topbar',
    data() {
        return {
            show: false,
        }
    },
    components: {
        'my-login': mylogin
    },
    methods: {
        ...mapActions([
            'FedLogOut'
        ]),
        login() {
            this.show = true;
        },
        logout() {
            this.FedLogOut()
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    }
}
</script>

<style scoped lang="stylus">
    .topbar {
        height 60px
        line-height 60px
        background-color #fff
        border-bottom 1px solid #ccc
        &-user {
            float right
            margin-right 10px
        }
        .register {
            color #09f
            cursor pointer
        }
    }
</style>
