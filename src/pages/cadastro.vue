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
  }
}
</script>
