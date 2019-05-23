<template>
    <el-container>
        <el-header style="width: 70%;margin: 0 auto">
            <div style="margin-top: 10px;float: right">
                <el-button type="primary">购物车</el-button>
                <el-button>登录|注册</el-button>
            </div>
        </el-header>
        <el-header style="width: 70%;height:500px;margin: 0 auto">
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

            <el-carousel indicator-position="outside" style="margin: 50px auto;width: 700px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

        </el-header>

        <el-main >
            <div class="category">
                <el-row :gutter="10" style="margin: 0 auto">
                    <el-col :span="6"><div class="grid-content bg-purple">分类1</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类2</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类3</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类4</div></el-col>
                </el-row>
                <el-row :gutter="10" style="margin: 10px auto">
                    <el-col :span="6"><div class="grid-content bg-purple">分类1</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类2</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类3</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">分类4</div></el-col>
                </el-row>
            </div>
        </el-main>

        <el-main style="width: 70%;height:600px;margin: 0 auto">
            <div class="category">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

                <el-row :gutter="10">
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <el-button type="text" class="button">进店</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

        </el-main>


        <div style="overflow: hidden;position: fixed;right: 10px;bottom: 20px;z-index: 10;">
            <div style="overflow: hidden;">
                <div style="padding-top:20px;padding-right:300px;padding-bottom:50px">
                    <el-button style="float: right;" type="primary" icon="el-icon-shopping-cart-full" size="medium" round></el-button>
                </div>
            </div>
        </div>

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

    .category{
        margin: 0 auto;
        width: 700px;
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

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>