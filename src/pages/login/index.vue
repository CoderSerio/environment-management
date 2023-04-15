<script setup lang="ts">
import { reactive, ref } from 'vue';
import type {  FormRules } from 'element-plus';

interface User{
    Username: string,
    Password: string,
    Phone: number|null
}
const isShow = ref(true)
const isregister = ref(false)
const formLabelAlign:User= reactive({
    Username: '',
    Password: '',
    Phone: null,
})
//切换登录或者注册
function afterLeave(){
    isregister.value=!isregister.value
}
function afterLeave1(){
    isShow.value=!isShow.value
}
//用户登录事件
const userLogin = ()=>{

}
//用户注册事件
const register =()=>{

}
//表单验证规则
const rules = reactive<FormRules>({
    Username: [
    { required: true, message: '请输入有效的用户名！', trigger: 'blur' },
    { min: 1, max: 5, message: '用户名在1-5个字之间', trigger: 'blur' },
    ],
    Password: [
        {
            required:true,message: '请输入密码！', trigger: 'blur'
        }
    ],
    Phone:[
        { required: true, message: '请填写您的电话号码' },
        { type: 'number', message: '这并不是一个数字！',transform:(value)=>Number(value) },
    ]
})
</script>


<template>
  <div class="top">
        <div class="left">
            <img src="@/assets/login.jpg" alt="">
        </div>
        <div class="right">
            <transition name="fade"  v-on:after-leave="afterLeave">
            <div class="form" v-if="isShow">
                <h1 style="font-weight: bold;margin-left: 25%;font-size: 30px;margin-bottom: 10%;">登录</h1>
                <el-form label-width="80px" :model="formLabelAlign" :rules="rules" style="width: 300px; margin: auto;">
                    <el-form-item label="用户名" prop="Username">
                        <el-input v-model="formLabelAlign.Username" />
                    </el-form-item>
                    <el-form-item label="密码" prop="Password" >
                        <el-input v-model="formLabelAlign.Password" show-password />
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" @click="userLogin">用户登录</el-button>
                       <div class="regbtn">
                        <el-button  @click="isShow = false">注册</el-button>
                       </div>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
        <transition name="fade" v-on:after-leave="afterLeave1">
            <div class="form" v-if="isregister">
                <h1 style="font-weight: bold;margin-left: 10%;font-size: 30px;margin-bottom: 10%;">注册</h1>
                <el-form label-width="80px" :model="formLabelAlign" :rules="rules" style="width: 300px; margin: auto;">
                    <el-form-item label="用户名" prop="Username"  >
                        <el-input v-model="formLabelAlign.Username"  />
                    </el-form-item>
                    <el-form-item label="密码"  prop="Password" >
                        <el-input v-model="formLabelAlign.Password" show-password />
                    </el-form-item>
                    <el-form-item label="手机号"  prop="Phone">
                        <el-input v-model="formLabelAlign.Phone"  type="text" />
                    </el-form-item>
                   <el-form-item>
                        <el-button type="primary" @click="register">确定注册</el-button>
                        <el-button @click="isregister=false">转到登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
        </div>
    </div>
</template>



<style scoped>


.top {
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
}

.left {
    width: 50%;
    border-radius: 10px;
}

.right {
    width: 50%;
    display: flex;
    flex-direction: column;
}
img {
    height: 100%;
    width: 100%;
    object-fit:fill;
    border-radius: 10px;
}
.regbtn{
    top: 20%;
    margin: auto;
}

.form {
    margin: auto;
    display: flex;
    flex-direction: column;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>