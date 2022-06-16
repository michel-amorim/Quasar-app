<template>
  <q-page class="q-pa-lg">
    <div class="row">
      <skeleton-table v-if="load" :colunas="3" :linhas="5" class="col" />
      <q-table
        v-else
        title="Tabela"
        :data="posts"
        :columns="columns"
        row-key="id"
        class="col"
        dense
        separator="cell"
        selection="multiple"
        :selected.sync="selected"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              icon="create"
              color="primary"
              size="sm"
              dense
              @click="editPost(props.row)"
            />
            <q-btn
              icon="delete"
              color="negative"
              size="sm"
              dense
              class="q-ml-sm"
              @click="deletePost(props.row)"
            />
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="flex justify-center q-mt-xl">
      <div>
        <img alt="mapa" src="~assets/map.svg" />
      </div>
    </div>
    <div class="flex justify-center">
      <div>
        <p>latitude: {{ this.latitude }}</p>
        <p>Longitude: {{ this.longitude }}</p>
      </div>
    </div>
    <div class="flex justify-center q-mt-lg">
      <q-btn
        color="purple-6"
        label="Minha localização"
        push
        size="lg"
        @click="getGeolocation"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  components: {
    SkeletonTable: () => import('components/skeletons/SkeletonTable.vue')
  },

  data () {
    return {
      load: true,

      latitude: '',
      longitude: '',

      columns: [
        {
          name: 'id',
          label: 'Id Post',
          field: 'id',
          align: 'left',
          sortable: true
        },
        {
          name: 'title',
          label: 'Title',
          field: 'title',
          align: 'left',
          sortable: true
        },
        {
          name: 'action',
          label: 'Action',
          align: 'right',
          sortable: true
        }
      ],
      posts: [],
      selected: []
    }
  },

  mounted () {
    setTimeout(() => {
      this.load = false
    }, 2000)
    this.getPosts()
  },

  methods: {
    getPosts () {
      this.$axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          this.posts = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editPost (idPost) {
      console.log(idPost)
    },
    deletePost (idPost) {
      console.log(idPost)
    },

    getGeolocation () {
      if (navigator.geolocation) {
        this.$q.loading.show()
        navigator.geolocation.getCurrentPosition(
          this.setPosition,
          this.errorPosition
        )
      } else {
        this.errorPosition()
      }
    },
    setPosition (position) {
      const coords = position.coords
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.successNotify()
      this.$q.loading.hide()
    },
    errorPosition () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Não foi possível recupera sua posição!'
      })
      this.$q.loading.hide()
    },
    successNotify () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'positive',
        textColor: 'white',
        actions: [{ icon: 'check', color: 'white' }],
        message: 'Posição recuperada com sucesso!'
      })
    }
  }
}
</script>
