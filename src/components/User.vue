<template>
  <div class="col">
    <div :class="['card', user.isFavorite ? 'shadow border-success' : 'shadow-sm']"
      @dblclick="$store.dispatch('toggleFavoriteUser', user)">
      <img :src="user.avatar" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 :class="['card-title', user.isFavorite ? ' text-success' : 'text-primary']">{{ user.name }}</h5>
        <p class="card-text">
          <b>Address:</b> {{ `${user.address.suite} ${user.address.street} street, ${user.address.city}`
          }}<br>
          <b>ZIP code:</b> {{ `${user.address.zipcode}` }}<br>
        </p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <!-- <a :href="`/users/${user.id}`" class="btn btn-primary">View</a> -->
        <button @click="$store.dispatch('toggleFavoriteUser', user)"
          :class="['btn', 'btn-sm', user.isFavorite ? 'btn-outline-success' : 'btn-success']">
          <i :class="['fa', 'fa-heart', user.isFavorite ? 'fa-solid' : 'fa-regular']"></i>

          {{
              user.isFavorite ? 'Remove from Favorite' : 'Add to Favorites'
          }}
        </button>
        <button @click="$store.dispatch('deleteUser', user)" class="btn btn-sm btn-outline-danger px-3">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['user'],
  // methods: {
  //   toggleFavoritesUser(user) {
  //     this.$emit('toggle-favorites-user', user);
  //   },
  //   deleteUser(user) {
  //     this.$emit('delete-user', user);
  //   }
  // },
  // emit: [
  //   'toggle-favorites-user',
  //   'delete-user'
  // ]
}
</script>

<style lang="scss" scoped>
</style>