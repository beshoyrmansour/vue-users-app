<template>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
      </div>
      <h1 class="mb-0 pb-0">Users</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-0">
        <User v-for="user in usersList" :key="user.id" :user="user"
          @toggle-favorites-user="$emit('toggle-favorites-user', $event)" @delete-user="$emit('delete-user', $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import User from './User.vue'

export default {
  components: {
    User
  },
  computed: {
    usersList() {
      return this.users.map(user => ({
        ...user,
        isFavorite: this.favoriteUsers.includes(user.id),
        avatar: `https://xsgames.co/randomusers/assets/avatars/${(user.id % 2) ? 'male' : 'female'}/${user.id}.jpg`
      })
      )
    },
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    favoriteUsers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>