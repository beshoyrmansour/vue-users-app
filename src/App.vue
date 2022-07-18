<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Vue logo" src="./assets/logo.png" width="30">
      </a>
      <div>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddNewUser"
          aria-controls="offcanvasAddNewUser"
          :class="['btn', 'btn-sm', $store.state.showAddNewUser ? 'btn-secondary' : 'btn-success']"
          @click="$store.dispatch('toggleShowAddNewUser')">{{
              $store.state.showAddNewUser ?
                'Cancel' :
                'Add New'
          }}</button>
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasAddNewUser"
          aria-labelledby="offcanvasAddNewUserLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasAddNewUserLabel">Backdroped with scrolling</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
              @click="$store.dispatch('toggleShowAddNewUser')"></button>
          </div>
          <div class="offcanvas-body">
            <AddNewUser />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <Users />

</template>

<script>
import Vuex from 'vuex';

import Users from './components/Users.vue'
import AddNewUser from './components/AddNewUser.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Users,
    AddNewUser
  },
  data() {

    return {
      showAddNewUser: false,
    }
  },

  computed: {

    // ...Vuex.mapState({
    //   test: state => state.test
    // })
  },
  methods: {
    ...mapActions([
      'fetchUsers'
    ]),

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
    await this.fetchUsers();
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
