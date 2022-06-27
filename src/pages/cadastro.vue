<template>
  <q-page class="flex flex-center bg-primary">
    <Cadastro />
  </q-page>
</template>

<script>
export default {
  name: 'cadastro',
  components: {
    Cadastro: () => import('components/FormCadastro/Cadastro.vue')
  },
  methods: {
    onSubmit () {
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
