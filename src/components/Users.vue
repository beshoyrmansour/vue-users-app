<template>

  <div class="container">
    <div class="row">
      <h1 class="mb-0 pb-0">Users</h1>
      <div class="row row-cols-1 my-4 pb-0">
        <div class="form-group ">
          <label for="query">Search</label>
          <input class="form-control" id="query" v-model="query" type="text" placeholder="Search by Name">
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-0">
        <User v-for="user in usersWithImages" :key="user.id" :user="user" />
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
  data() {
    return {
      query: ''
    }
  },
  computed: {
    usersWithImages() {
      return this.$store.getters.usersWithImages.filter(user => {
        return user.name.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>