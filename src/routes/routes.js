import Vue from 'vue'
import Router from 'vue-router'
// 加载模板文件
import NotFound from '../views/404.vue'
import StudentLogin from '../views/login/StudentLogin.vue'
import Admin from '../views/admin/Admin.vue'
import StartEnrollment from '../views/admin/enrollment/StartEnrollment.vue'
import SetProfessions from '../views/admin/enrollment/SetProfessions.vue'
import NotPassStudents from '../views/admin/check/NotPassStudents.vue'
import PassedStudents from '../views/admin/check/PassedStudents.vue'
import AllStudents from '../views/admin/check/AllStudents.vue'
import EditMessage from '../views/admin/publish/EditMessage.vue'
import EditEmail from '../views/admin/publish/EditEmail.vue'
import PublishResult from '../views/admin/publish/PublishResult.vue'
import EndEnrollment from '../views/admin/enrollment/EndEnrollment.vue'
import Home from '../views/home/Home.vue'
import Welcome from  '../views/welcome/Welcome.vue'
import Register from  '../views/welcome/Register.vue'
import Seller from '../views/seller/Seller.vue'
import SellerInfo from '../views/seller/SellerInfo.vue'
import CreateGood from '../views/seller/CreateGood.vue'
import Good from '../views/seller/Good.vue'
import CreateGoodGroup from '../views/seller/CreateGoodGroup.vue'
import GoodGroup from '../views/seller/GoodGroup.vue'
import Bills from '../views/seller/Bills.vue'
import User from '../views/user/User.vue'
import UserInfo from '../views/user/UserInfo.vue'
import Book from '../views/user/Book.vue'
import Detail from '../views/user/Detail.vue'
import Pay from '../views/user/Pay.vue'
import Address from '../views/user/Address.vue'
import UserBill from '../views/user/UserBill.vue'
import Check from '../views/admin/Check.vue'
import Settle from '../views/admin/Settle.vue'
import UserStatistics from '../views/user/UserStatistics.vue'
import SellerStatistics from '../views/seller/SellerStatistics.vue'
import AdminStatistics from '../views/admin/AdminStatistics.vue'
import SearchPage from '../views/reader/SearchPage'


Vue.use(Router);
export default new Router({
    modes: 'history',
    routes: [
        {
            path: '/',
            name: 'StudentLogin',
            component: StudentLogin,
            hidden: true
        },
        {
            path:'/welcome',
            name:'Welcome',
            component:Welcome,
            hidden:true
        },
        {
            path:'/search',
            name:'SearchPage',
            component:SearchPage,
            hidden:true
        },
        {
            path:'/register',
            name:'Register',
            component:Register,
            hidden:true
        },
        {
            path:'/detail',
            name:'Detail',
            component:Detail,
            hidden:true
        },
        {
            path:'/pay',
            name:'Pay',
            component:Pay,
            hidden:true
        },

        {
            path: '/404',
            name: '404',
            component: NotFound,
            hidden: true
        },

        {
            path:'/seller',
            name:'Seller',
            component:Seller,
            hidden:true
        },

        {
            path: '/seller',
            component: Seller,
            name: '餐厅信息',
            iconClass: 'el-icon-date',//图标
            children: [
                {path: '/seller/s1a', component: SellerInfo, name: '基本信息'},
                {path: '/seller/s1b', component: SellerStatistics, name: '统计信息'}
            ]
        },
        {
            path: '/seller',
            component: Seller,
            name: '发布',
            iconClass: 'el-icon-edit-outline',
            children: [
                {path: '/seller/s2a', component: CreateGood, name: '发布商品'},
                {path: '/seller/s2b', component: CreateGoodGroup, name: '发布套餐'}
            ]
        },
        {
            path: '/seller',
            component: Seller,
            name: '查看',
            iconClass: 'el-icon-message',
            // leaf: true,//只有一个节点
            children: [
                {path: '/seller/s3a', component: Good, name: '当前商品'},
                {path: '/seller/s3b', component: GoodGroup, name: '当前套餐'},
                {path: '/seller/s3c', component: Bills, name: '我的订单'},
            ]
        },
        {
            path:'/user',
            name:'User',
            component:User,
            hidden:true
        },
        {
            path: '/user',
            component: User,
            name: '个人',
            iconClass: 'el-icon-date',//图标
            children: [
                {path: '/user/u1a', component: UserInfo, name: '基本信息'},
                {path: '/user/u1b', component: Address, name: '地址管理'},
            ]
        },
        {
            path: '/user',
            component: User,
            name: '订餐',
            iconClass: 'el-icon-date',//图标
            children: [
                {path: '/user/u2a', component: Book, name: '餐厅'}
            ]
        },
        {
            path: '/user',
            component: User,
            name: '查看',
            iconClass: 'el-icon-date',//图标
            children: [
                {path: '/user/u3a', component: UserBill, name: '订单'},
                {path: '/user/u3b', component: UserStatistics, name: '统计信息'}
            ]
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            hidden: true
        },
        {
            path: '/admin',
            component: Admin,
            name: '审批',
            iconClass: 'el-icon-date',//图标
            children: [
                {path: '/admin/a1a', component: Check, name: '商户资格'},
                {path: '/admin/a1b', component: Settle, name: '款项发放'},
            ]
        },
        {
            path: '/admin',
            component: Admin,
            name: '查看',
            iconClass: 'el-icon-edit-outline',
            children: [
                {path: '/admin/a2a', component: AdminStatistics, name: '统计信息'},
            ]
        },


        {
            path: '/home',
            name: 'Home',
            component: Home,
            hidden: true
        },

        {
            path: '*',
            redirect: '/',
            hidden: true
        }
    ]
})
