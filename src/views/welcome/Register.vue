<template>
    <el-container>

        <el-header>
            注册
        </el-header>

        <el-main>
            <el-form :inline="true" ref="form" :model="form" label-width="100px">
                <el-form-item label="注册类型" :rules="[{ required: true}]" style="float: left">
                    <el-radio-group v-model="form.category">
                        <el-radio label="普通用户"></el-radio>
                        <el-radio label="商家用户"></el-radio>
                    </el-radio-group>

                </el-form-item>

                <el-form-item label="注册邮箱" prop="email"
                              :rules="[{ required: true, message: '请输入邮箱地址'},
                              { type: 'email', message: '请输入正确的邮箱地址'}]" style="float: left;">
                    <el-col :span="17">
                        <el-input v-model="form.email" clearable style="display: inline"></el-input>
                    </el-col>

                    <el-col :span="3" style="margin-left: 5px">
                        <el-button type="primary">获取验证码</el-button>
                    </el-col>
                </el-form-item>

                <el-form-item label="邮箱验证码" style="float: left" :rules="[{required: true}]">
                    <el-input v-model="form.code" clearable></el-input>
                </el-form-item>

                <el-form-item label=" " style="float: left">
                    <el-button type="primary">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    category: '',
                    email: '',
                    code: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>



<style scoped>

    .el-row{
        font-size: 30px;
    }

    .el-header{
        margin-top: 30px;
        font-size: 2em;
    }

    .el-form{
        width: 30%;
        margin: 0 auto;
    }




</style>