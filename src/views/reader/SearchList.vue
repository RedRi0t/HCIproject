<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
        <el-row>
            <el-col :span="8">
                <br/>
            </el-col>
            <el-col :span="8">
                <br/>
                <div style="margin-top: 15px;">
                    <el-input v-model="searchContent" placeholder="请输入内容">
                        <!--<el-select v-model="select" slot="prepend" placeholder="请选择">-->
                        <!--<el-option label="餐厅名" value="1"></el-option>-->
                        <!--<el-option label="订单号" value="2"></el-option>-->
                        <!--<el-option label="用户电话" value="3"></el-option>-->
                        <!--</el-select>-->
                        <el-button slot="append" icon="el-icon-search"
                        @click="searchRes()"></el-button>
                    </el-input>
                </div>
            </el-col>
        </el-row>
        <br/><br/><br/>
        <el-row>
            <el-col :span="6">
                <br/>
            </el-col>
            <el-col :span="11">
                <div v-for="i in 4" :key="i">
                    <el-card class="box-card">
                        <div slot="header">
                            <span>{{res_name}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text"
                                       @click="resDetailPage()">查看详细</el-button>
                        </div>
                        <el-col :span="8">
                            <img src="./img/hamburger.jpeg" class="image"/>
                        </el-col>
                        <el-col :span="16">
                            <div style="border-right: 15px;">
                                <span>{{description}}</span>
                            </div>
                        </el-col>
                    </el-card>
                    <br/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class SearchList extends Vue{
        name: "SearchList";
        searchContent:String="";
        resInfoList:RestaurantInfo[]=[];

        res_name:String="Mc Donalds";
        description:String="汉堡汉堡，好吃的汉堡。";
        address:String="就在世界的每个角落";
        image:String="";

        private searchRes() {
            axios.get('http://localhost:3142/search/list/'+this.searchContent).then((response)=>{

                this.resInfoList=response.data;
            })
        }

        private resDetailPage() {

        }
    }

    class RestaurantInfo{
        res_name:String="Mc Donalds";
        description:String="汉堡汉堡，好吃的汉堡。";
        address:String="就在世界的每个角落";
        image:String="";
    }
</script>

<style scoped>
    .box-card {
        width: 800px;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .image {
        width: 100%;
        border-left: 15px;
        display: block;
    }
</style>