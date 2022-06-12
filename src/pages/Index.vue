<template>
  <q-page class="q-pa-md">
    <q-card class="row">
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
    </q-card>
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
    }
  }
}
</script>
