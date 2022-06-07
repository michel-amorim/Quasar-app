<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      style="width: 300px; height: auto; display: flex; flex-direction: column"
    >
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Login</h1>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input filled v-model="login.email" label="E-mail" />

        <q-input
          class="q-mt-sm"
          label="Senha"
          v-model="login.password"
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

      <q-card-actions class="q-pt-none">
        <q-btn
          class="q-mx-sm"
          color="primary"
          style="width: 100%"
          label="Login"
          @click="$router.push({ name: 'home' })"
        />
      </q-card-actions>
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
  name: 'PageIndex',
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
