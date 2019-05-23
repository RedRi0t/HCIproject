<template>
    <el-container>
        <el-header style="width: 70%;height:600px;margin: 0 auto">
            <div style="margin: 10px auto">
                <div id="logo">
                    <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
                </div>

                <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-left: 350px;padding-top: 40px">
                    <el-form-item style="margin-bottom: 0">
                        <el-input v-model="formInline.user" placeholder="搜索商家" style="width: 300px"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0">
                        <el-button icon="el-icon-search" type="primary" circle @click="onSubmit"></el-button>
                    </el-form-item>
                </el-form>
            </div>

            <el-carousel indicator-position="outside" style="margin: 70px auto;width: 700px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

        </el-header>

        <el-main style="width: 70%;height:600px;margin: 0 auto">
            <div id="category">
                <el-row :gutter="15" style="margin: 0 auto">
                    <el-col :span="5"><div class="grid-content bg-purple">分类1</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">分类2</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">分类3</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">分类4</div></el-col>
                </el-row>
            </div>
        </el-main>

    </el-container>
</template>

<script lang="ts">
    export default {
        data(){
            return{
               formInline: {
                   user: '',
                   region: ''
               },
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
    #logo{
        overflow: hidden;
        width: 362px;
        vertical-align: middle;
        position: absolute;
        margin-left: 120px;
    }

    #category{
        margin: 0 auto;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-row {
        margin-bottom: 20px;
     }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>