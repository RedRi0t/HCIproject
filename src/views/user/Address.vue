<template>
    <el-col span="24">

        <el-row>
            <el-col>
                城市 &nbsp：
                <el-input v-model="city" size="small" style="width: 100px;height:1px">
                </el-input>

                &nbsp&nbsp&nbsp区(县) &nbsp：
                <el-input v-model="district" size="small" style="width: 100px;height:1px">
                </el-input>
            </el-col>
        </el-row>
        <el-row><br></el-row>
        <el-row>
            <el-col>
                详细地址 &nbsp：
                <el-input v-model="address" size="small" style="width: 300px;height:1px">
                </el-input>
                &nbsp&nbsp
                <el-button type="primary" @click="addAddress">添加地址</el-button>
            </el-col>
        </el-row>
        <el-row><br></el-row>

        <el-table
                :data="addresses"
                height="300"
                border
                style="width: 100%">
            <el-table-column
                    prop="city"
                    label="城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="district"
                    label="区（县）"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="详细地址"
                    width="400">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteAddress(scope.$index, scope.row)">删除地址</el-button>
                </template>
            </el-table-column>
        </el-table>

    </el-col>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getCookie, deleteCookie,setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class Address extends Vue {
        addresses:AddressDto[]=[];
        defaultUser:string=getCookie('emailAddress');
        city:string ='';
        district:string='';
        address:string='';
        mounted(){
            axios.get('http://localhost:3142/user/address/'+this.defaultUser).then(response=>{
                this.addresses=response.data
            })
        }
        private  addAddress(){
            if(this.address!='' && this.district!='' && this.city!=''){

                axios.post('http://localhost:3142/user/address/', {
                    city: this.city,
                    district: this.district,
                    address: this.address,
                    uid: this.defaultUser,

                }).then((response) => {
                    axios.get('http://localhost:3142/user/address/' + this.defaultUser).then(response => {
                        this.addresses = response.data
                    })
                })
            }else{
                alert("请补全信息！");
            }
        }

        private deleteAddress(index:number,row:string){

            axios.delete('http://localhost:3142/user/address/'+this.addresses[index].id.toString()).then((response)=>{
                alert("删除成功！")
                this.addresses.splice(index,1);
            })
        }
    }

    class AddressDto{
        id:string;
        uid:string;
        city:string;
        district:string;
        address:string;

    }
</script>

<style scoped>

</style>