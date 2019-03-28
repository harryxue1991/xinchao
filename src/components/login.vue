<template>
    <el-dialog
        title="用户登入注册"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div>
            <el-form :model="ruleForm2" :rules="rules" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="ruleForm2.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="go_register">注册</el-button>
            <el-button type="primary" @click="go_login('ruleForm2')">登入</el-button>
        </span>
    </el-dialog>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'login',
    props: {
        dialogVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ruleForm2: {
                name: '',
                password: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapActions([
            'Login',
        ]),
        handleClose() {
            this.$emit('update:dialogVisible', false)
        },
        go_login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.Login(this.ruleForm2).then(res => {
                        if(res.success) {
                            socket.emit('login', res.data.userInfo.user_id)
                            this.handleClose()
                        }
                    })
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        go_register() {
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped lang="stylus">

</style>
