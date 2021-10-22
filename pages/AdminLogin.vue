<template>
    <div class="columns  is-centered">
        <div class="box column is-6">
            <div class="columns header-text-msg">
                <div class="column">
                    <h1>Acesso à Área Administrativa </h1>
                </div>
            </div>
            <form  @submit.prevent="storeForm()">
                <div class="columns">
                    <div class="column">
                        <div class="form-group">
                            <label  class="txt1 p-b-20">E-mail</label >
                            <input class="input100" type="email" v-model="form.email"  >
                            <p class="error-msg" v-if="errors.has('form.email')" v-text="errors.get('form.email')"></p>
                        </div>
                        <div class="form-group">
                            <label  class="txt1 p-b-20 p-t-15">Senha</label >
                            <input class="input100" type="password" v-model="form.password"  >
                            <p class="error-msg" v-if="errors.has('form.password')" v-text="errors.get('form.password')"></p>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                       <router-link :to="{name:'ForgotPassword'}"  class="txt3" >Esqueceu a Senha</router-link>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="container-login100-form-btn">
                            <submit-btn :stylebutton="'btn_full login100-form-btn'" :textbutton="'Acesse'" ></submit-btn>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import FormDisplay from 'src/core/FormDisplay'
import SubmitBtn from 'src/components/SubmitBtn'

export default {
  name: 'AdminLogin',
  components: {
    SubmitBtn
  },
  data () {
    return {
      form: { email: '', password: '' }
    }
  },
  meta: {
    // sets document title
    title: 'Área de Acesso Restrito',
    description: { name: 'description', content: 'Page 1' },
    keywords: { name: 'keywords', content: 'Quasar website' }
  },
  methods: {
    storeForm () {
      // STORE LOGIN
      this.$store.dispatch('adminLogin/store', this.form).then((res) => {
        // SET USER INFO
        this.$store.dispatch('adminLogin/getUserInfo').then((res) => {
          // REDIRECT PAGE
          window.location.href = '/admin/home'
        })
      }).catch(error => {
  
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
