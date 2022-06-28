<template>
  <q-page class="flex flex-center bg-primary">
    <q-card style="width: 300px">
      <q-card-section class="q-pb-sm">
        <h1 class="text-h6">Esqueci minha Senha</h1>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-item-label class="q-mb-sm">E-mail de cadastro</q-item-label>
        <q-input
          v-bind="{ ...$visualInput }"
          type="email"
          clear-icon="close"
          v-model="email"
          label="E-mail"
        >
          <template v-slot:prepend>
            <q-icon class="justify-start" name="mails" /> </template
        ></q-input>
      </q-card-section>

      <q-card-actions class="q-pt-none">
        <q-btn
          outline
          class="q-mx-sm q-mb-sm"
          color="primary"
          style="width: 100%"
          label="Redefinir senha"
          @click="$router.push({ name: 'login' })"
        />
      </q-card-actions>
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
  }
}
</script>
