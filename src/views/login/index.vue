<template>
  <div class="x-login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm form"
    >
      <el-form-item
        label="用户名"
        prop="name"
      >
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >注册</el-button>
        <el-button @click="resetForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Login } from '@/api/index'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            name: this.ruleForm.name,
            password: this.ruleForm.pass
          }
          Login.logup(data).then(res => {
            // Login.user({ name: data.name }).then(res => {
            //   console.log(res)
            // })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      let data = {
        name: this.ruleForm.name,
        password: this.ruleForm.pass
      }
      Login.login(data).then(res => {
        console.log(res)
      })
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.x-login {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    margin: auto;
  }
}
</style>
