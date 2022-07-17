<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Vue logo" src="./assets/logo.png" width="30">
      </a>
      <div>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddNewUser"
          aria-controls="offcanvasAddNewUser"
          :class="['btn', 'btn-sm', showAddNewUser ? 'btn-secondary' : 'btn-success']"
          @click="toggleShowAddNewUser()">{{
              showAddNewUser ?
                'Cancel' :
                'Add New'
          }}</button>
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasAddNewUser"
          aria-labelledby="offcanvasAddNewUserLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasAddNewUserLabel">Backdroped with scrolling</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
              @click="toggleShowAddNewUser()"></button>
          </div>
          <div class="offcanvas-body">
            <AddNewUser @add-new-user="addNewUser" />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <Users :favoriteUsers="favoriteUsers" :users="users" @toggle-favorites-user="toggleFavoriteUser($event)"
    @delete-user="deleteUser($event)" />

</template>

<script>
import Users from './components/Users.vue'
import AddNewUser from './components/AddNewUser.vue'

export default {
  name: 'App',
  components: {
    Users,
    AddNewUser
  },
  data() {
    return {
      users: [],
      showAddNewUser: false,
      favoriteUsers: []
    }
  },
  methods: {

    toggleFavoriteUser(user) {
      if (this.favoriteUsers.includes(user.id)) {
        this.favoriteUsers = this.favoriteUsers.filter(u => u !== user.id)
      } else {
        this.favoriteUsers.push(user.id)
      }
    },
    deleteUser(user) {
      this.users = this.users.filter(u => u.id !== user.id)
    },

    toggleShowAddNewUser() {
      this.showAddNewUser = !this.showAddNewUser
    },
    async getUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json();
      return json;
    },

    async addNewUser(user) {

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const json = await response.json();
      this.users = [json, ...this.users];
      toggleShowAddNewUser()
    }
  },
  async created() {
    const users = await this.getUsers();
    this.users = users;
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
