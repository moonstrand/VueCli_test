<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Form v-slot="{ errors }" @submit="onSubmit" >
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
      placeholder="請輸入 Email" rules="email|required"
      v-model="user.email"></field>
      <error-message name="email" class="invalid-feedback"></error-message>
      <span class="invalid-feedback"></span>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
               placeholder="請輸入姓名" rules="required" v-model="user.name"></field>
      <error-message name="name" class="invalid-feedback"></error-message>
      <span class="invalid-feedback">{{ errors.姓名 }}</span>
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">電話</label>
      <field id="phone" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
               placeholder="請輸入電話" :rules="isPhone" v-model="user.phone"></field>
      <error-message name="phone" class="invalid-feedback"></error-message>
      <span class="invalid-feedback">{{ errors.電話 }}</span>
    </div>

    <div class="mb-3">
      <label for="region" class="form-label">地區</label>
      <field id="region" name="地區" class="form-control" :class="{ 'is-invalid': errors['地區'] }"
      placeholder="請輸入地區"
      rules="required"
      v-model="user.region"
      as="select">
        <option value="">請選擇地區</option>
        <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="新竹市">新竹市</option>
        <option value="台中市">台中市</option>
        <option value="高雄市">高雄市</option>
      </field>
      <error-message name="region" class="invalid-feedback"></error-message>
      <span class="invalid-feedback">{{ errors.地區 }}</span>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">地址</label>
      <field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
               placeholder="請輸入地址" rules="required" v-model="user.address"></field>
      <error-message name="address" class="invalid-feedback"></error-message>
      <span class="invalid-feedback">{{ errors.地址 }}</span>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      user: {
        email: '',
        name: '',
        address: '',
        phone: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  created () {
    console.log(this)
  },
  components: {
    HelloWorld
  }
}
</script>
