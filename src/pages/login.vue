<template>
    <div>
        <div>

        </div>

        <div @click="go_register">
            <a href="javascript:;">注册</a>
        </div>
        <div>
            <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="ruleForm2.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="go_login('ruleForm2')">登入</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            ruleForm2: {
                name: '',
                password: '',
            },
        };
    },
    methods: {
        go_login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('/api/v1/login', this.ruleForm2).then(res => {
                        if(res.data.success) {
                            this.$router.push({ path: '/' })
                            console.log(res.data)
                        }else{
                            this.$message({
                                message: res.data.message,
                                type: "error"
                            });
                        }
                    })
                    console.log(this.ruleForm2)
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