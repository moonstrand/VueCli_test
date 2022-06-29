import { createApp } from 'vue'

// 導入 vee-validate 表單驗證套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 導入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 導入多國語系功能
import { localize, setLocale } from '@vee-validate/i18n'

// 導入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({
    zh_TW: zhTW
  }),
  validateOnInput: true
})

// 設定預設語系
setLocale('zh_TW')

// 初始化 Vue
const app = createApp(App).use(router)

// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
