<template>
  <q-page class="flex flex-center bg-primary">
    <q-card class="block" style="width: 300px">
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Login</h1>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          v-model="login.email"
          filled
          clearable
          clear-icon="close"
          label="E-mail"
        />

        <q-input
          v-model="login.password"
          class="q-mt-sm"
          clearable
          clear-icon="close"
          label="Senha"
          filled
          :type="login.isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="login.isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="login.isPwd = !login.isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <div class="flex flex-center">
        <q-btn
          class="q-mr-md"
          label="Login"
          color="primary"
          @click="$router.push({ name: 'home' })"
        />
        <q-btn
          class="text-green-10"
          label="Cadastrar"
          type="reset"
          color="defaoult"
          @click="$router.push({ name: 'cadastro' })"
        />
      </div>

      <q-card-actions class="q-pt-none">
        <q-btn
          flat
          class="q-mx-sm"
          color="primary"
          style="width: 100%"
          label="Esqueci minha senha"
          @click="$router.push({ name: 'esqueciSenha' })"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: {
        email: '',
        password: '',
        isPwd: true
      }
    }
  },
  methods: {}
}
</script>
