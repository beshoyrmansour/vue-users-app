<template>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
      </div>
      <h1 class="mb-0 pb-0">Users</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-0">
        <User v-for="user in $store.getters.usersWithImages" :key="user.id" :user="user" />
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

}
</script>

<style lang="scss" scoped>
</style>