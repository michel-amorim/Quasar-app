<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      style="width: 300px; height: auto; display: flex; flex-direction: column"
    >
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Cadastro</h1>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form class="row" @submit="onSubmit" ref="myForm">
          <q-input
            v-model="form.name"
            type="text"
            filled
            clearable
            clear-icon="close"
            color="primary"
            label="Nome"
            class="col-xs-12"
            :rules="[(val) => (val && val.length > 0) || 'Nome obrigatório']"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="form.password"
            filled
            clearable
            clear-icon="close"
            color="primary"
            label="Senha"
            class="col-xs-12"
            :type="form.isPwd ? 'password' : 'text'"
            :rules="[
              (val) => (val !== null && val !== '') || 'Senha obrigatório',
              (val) => (val && val.length > 5) || 'Minimo 6 digitos',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="form.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="form.isPwd = !form.isPwd"
              />
            </template>
          </q-input>

          <q-input
            filled
            clearable
            clear-icon="close"
            color="primary"
            v-model="form.username"
            type="email"
            label="E-mail"
            class="col-xs-12"
            :rules="[(val) => (val && val.length > 0) || 'E-mail obrigatório']"
          >
            <template v-slot:prepend>
              <q-icon class="justify-start" name="mails" />
            </template>
          </q-input>

          <q-input
            v-model="form.tel"
            icon="call"
            label="Telefone"
            filled
            clearable
            clear-icon="close"
            color="primary"
            class="col-xs-12"
            mask="(##) #####-####"
            hint="Telefone: (##) #####-####"
            unmasked-value
            :rules="[
              (val) => (val && val.length > 0) || 'Telefone obrigatório',
              (val) => val.length === 11 || 'Coloque um telefone real',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>

          <div class="col-12 q-mt-lg">
            <q-btn
              class="float-right"
              label="Cadastrar"
              type="submit"
              color="primary"
            />
            <q-btn
              class="float-right text-green-10 q-mr-md"
              label="Voltar"
              type="reset"
              color="default"
              @click="$router.push({ name: 'login' })"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
// import { Api } from '../services/Api'
// import { CADASTRAR } from '../services/endpoints'

export default {
  name: 'cadastro',
  data () {
    return {
      form: {
        name: '',
        password: '',
        username: '',
        tel: '',
        isPwd: true
      }
    }
  },
  methods: {
    onSubmit () {
    //   const sendData = {
    //     name: this.form.name,
    //     password: this.form.password,
    //     username: this.form.username,
    //     tel: this.form.tel
    //   }

      //   const response = await Api.post(CADASTRAR, sendData)

      // console.log(response)
      this.$q.notify({
        message: 'Cadastro realizado com sucesso!',
        color: 'positive',
        icon: 'check_circle_outline'
      })
      this.onReset()
    },
    async onReset () {
      await this.resetForm()
      this.$refs.myForm.resetValidation()
    },
    async resetForm () {
      this.form = {
        name: '',
        password: '',
        username: '',
        tel: '',
        isPwd: true
      }
    }
  }
}
</script>
