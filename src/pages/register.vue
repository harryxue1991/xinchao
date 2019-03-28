<template>
    <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input autoComplete="new-password" type="password" v-model="ruleForm2.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
        </el-form-item>
    </el-form>
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('/api/v1/register', this.ruleForm2).then(res => {
                        if(res.data.success) {
                            this.$router.push('/')
                        }else{
                            this.$message({
                                message: res.data.message,
                                type: "error"
                            });
                        }
                    })
                    // console.log(this.ruleForm2)
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>