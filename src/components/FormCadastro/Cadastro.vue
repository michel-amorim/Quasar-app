<template>
  <q-card
    style="width: 300px; height: auto; display: flex; flex-direction: column"
  >
    <q-card-section class="q-pb-sm">
      <h1 class="text-h6">Cadastro</h1>
      <q-form class="row" @submit="onSubmit" ref="myForm">
        <q-input
          v-model="form.name"
          v-bind="{ ...$visualInput }"
          type="text"
          clear-icon="close"
          label="Nome"
          :rules="[(val) => (val && val.length > 0) || 'Nome obrigatório']"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          v-model="form.password"
          v-bind="{ ...$visualInput }"
          clear-icon="close"
          label="Senha"
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
          v-model="form.username"
          v-bind="{ ...$visualInput }"
          type="email"
          label="E-mail"
          clear-icon="close"
          :rules="[(val) => (val && val.length > 0) || 'E-mail obrigatório']"
        >
          <template v-slot:prepend>
            <q-icon class="justify-start" name="mails" />
          </template>
        </q-input>

        <q-input
          v-model="form.tel"
          v-bind="{ ...$visualInput }"
          icon="call"
          label="Telefone"
          clear-icon="close"
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
          <q-btn class="float-right" label="Cadastrar" type="submit" />
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
</template>

<script>
export default {
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
