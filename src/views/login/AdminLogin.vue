<template>
    <div>
        <div class="login">
            <div class="inputs">
                <div>
                    <p class="emailAddress">
                        <input type="text" placeholder="账号 Admin" v-model="username">
                        <i></i>
                    </p>
                    <p class="password">
                        <input type="password" placeholder="密码 Password" v-model="password">
                        <i></i>
                    </p>
                    <p>
                        <button class="loginButton" @click="checkAndLogin()">登 录</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <router-link to="#" class="router1">忘记密码</router-link>
            <a href="#" class="router3" @click="switchStudent">用户/商家入口</a>
        </div>
    </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import {setCookie} from '../../assets/utils/cookie.ts'
  import {bus} from './bus.ts'
  import axios from 'axios'

  @Component({})
  export default class AdminLogin extends Vue {

    showPrompt: boolean = false
    promptContent: string = ''
    username: string = ''
    password: string = ''
    captcha: string = ''

    private checkAndLogin () {

      if (this.username === '') {
        alert("请输入账号")
      } else if (this.password === '') {
        alert("请输入密码")
      }  else {
        /*接口请求*/
        axios.post('http://localhost:3142/welcome/admin', {
          'username': this.username,
          'password': this.password
        }).then((response) => {
          //console.log(response.data)
          //if (response.data.isSucceed) {
            if(response.status==201){
                this.promptContent = "登录成功";
                this.showPrompt = true
                setCookie('username', this.username, 1000 * 60);
                setCookie('actualName', this.username, 1000 * 60);
             //setCookie('actualName', response.data.information, 1000 * 60)
                console.log(document.cookie)
                setTimeout(function () {
                this.$router.push('/admin')
                }.bind(this), 1000)
          } else {
            if (response.data.information === LoginErrors.USER_NOT_EXIST) {
              this.promptContent = "用户不存在"
              this.showPrompt = true
            } else if (response.data.information === LoginErrors.PASSWORD_WRONG) {
              this.promptContent = "密码错误"
              this.showPrompt = true
            }

          }
        }).catch((error) => {
            alert("请求失败");
            alert(error);
          console.log(error)
        })
      }
    }

    private getCaptcha () {
      axios.get('http://localhost:3000/login/captcha')
        .then((response) => {
          this.captcha = response.data.captchaImage
        })
        .catch((error) => {
          console.log((error))
        })
    }

    private switchStudent () {
      bus.$emit('switch-page', LoginPages.STUDENT)

    }
  }

  enum LoginErrors {USER_NOT_EXIST = '-2', PASSWORD_WRONG = '-1', CAPTCHA_WRONG = '0'}

  enum LoginPages {STUDENT = '1', ADMIN = '2', REGISTER = '3'}
</script>

<style scoped>
    a, a:hover {
        text-decoration: none;
    }

    body, input, button {
        font: 12px arial;
        color: #333333;
        outline: 0;
        vertical-align: middle;
    }

    body {
        background-color: #fff;
    }

    body, p {
        font-family: "Microsoft Yahei", serif;
    }

    a {
        color: #fff;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
    }

    a:hover {
        color: #00a65a;
    }

    .login {
        float: none;
        width: 364px;
        margin: 0 auto;
    }

    .login .inputs p {
        margin-bottom: 15px;
        position: relative;
        width: 100%;
        background: #fff;
        text-align: left;
        border-radius: 4px;
    }

    .login .inputs p i {
        display: inline-block;
        width: 28px;
        height: 28px;
        background: url(./img/LoginIcons.png) no-repeat;
        position: absolute;
        right: 6px;
        top: 7px;
        z-index: 1000;
    }

    .emailAddress i {
        background-position: 7px 6px !important;
    }

    .password i {
        background-position: 7px -50px !important;
    }

    .login .inputs input {
        width: 85%;
        height: 40px;
        line-height: 40px;
        margin-left: 16px;
        font-family: "Microsoft Yahei", serif;
        border: 0;
        font-size: 14px;
        color: #878787;
    }

    .login .inputs .verify .codeImg {
        width: 70px;
        height: 30px;
        vertical-align: top;
        position: absolute;
        right: 4px;
        top: 6px;
        z-index: 1000;
    }

    .login .inputs {
        margin-left: 12px;
        line-height: 36px;
    }

    .login .inputs a {
        color: #b70e0e;
    }

    .login .inputs .loginButton {
        height: 40px;
        line-height: 40px;
        width: 100%;
        padding: 0;
        margin-left: 0;
        background: #409eff;
        border: 0;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 4px;
    }

    .login .inputs .loginButton:hover {
        opacity: .9;
        filter: Alpha(opacity=90);
    }

    .footer {
        display: inline-block;
        width: 80%;
        line-height: 25px;
    }

    .footer a {
        float: left;
        font-size: 14px;
        color: #fff;
    }

    .footer .router1 {
        text-align: left;
        width: 30%
    }

    .footer .router3 {
        text-align: right;
        float: right;
        width: 30%
    }

    .footer a:hover {
        color: #ccc;
    }
</style>
