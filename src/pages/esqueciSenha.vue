<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      style="width: 300px; height: auto; display: flex; flex-direction: column"
    >
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Esqueci minha Senha</h1>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-item-label class="q-mb-sm">E-mail de cadastro</q-item-label>
        <q-input filled v-model="email" label="E-mail" />
      </q-card-section>

      <q-card-actions class="q-pt-none">
        <q-btn
          outline
          class="q-mx-sm"
          color="primary"
          style="width: 100%"
          label="Redefinir senha"
          @click="$router.push({ name: 'login' })"
        />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">Title</div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'esqueci-minha-senha',
  data () {
    return {
      email: ''
    }
  },
  methods: {}
}
</script>
