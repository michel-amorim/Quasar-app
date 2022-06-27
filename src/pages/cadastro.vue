<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      style="width: 300px; height: auto; display: flex; flex-direction: column"
    >
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Cadastro</h1>
      <Cadastro />
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
// import { Api } from '../services/Api'
// import { CADASTRAR } from '../services/endpoints'

export default {
  name: 'cadastro',
  components: {
    Cadastro: () => import('components/FormCadastro/Cadastro.vue')
  }
}
</script>
