<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Add New User</h3>
      <!-- Add new user form -->
      <form class="" @submit.prevent="submitNewUser()">
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter name">
        </div>
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 form-group mb-3">
            <label for="userName">userName</label>
            <input type="text" class="form-control" id="userName" v-model="userName" placeholder="Enter userName">
          </div>
          <div class="col-12 col-lg-6 form-group mb-3">
            <label for="phone">phone</label>
            <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Enter phone">
          </div>
        </div>
        <p class="h4">Address</p>
        <div class="row">
          <div class="col-12 col-lg-12 form-group mb-3">
            <label for="street">street</label>
            <input type="text" class="form-control" id="street" v-model="address.street" placeholder="Enter street">
          </div>
          <div class="col-12 col-lg-4 form-group mb-3">
            <label for="suite">suite</label>
            <input type="text" class="form-control" id="suite" v-model="address.suite" placeholder="Enter suite">
          </div>
          <div class="col-12 col-lg-4 form-group mb-3">
            <label for="city">city</label>
            <input type="text" class="form-control" id="city" v-model="address.city" placeholder="Enter city">
          </div>
          <div class="col-12 col-lg-4 form-group mb-3">
            <label for="zipcode">zipcode</label>
            <input type="text" class="form-control" id="zipcode" v-model="address.zipcode" placeholder="Enter zipcode">
          </div>
          <p class="h4">Geolocation</p>
          <div class="col-6 col-lg-6 form-group mb-3">
            <label for="lat">Latitude</label>
            <input type="text" class="form-control" id="lat" v-model="address.geo.lat" placeholder="Enter Latitude">
          </div>
          <div class="col-6 col-lg-6 form-group mb-3">
            <label for="lng">Longitude</label>
            <input type="text" class="form-control" id="lng" v-model="address.geo.lng" placeholder="Enter Longitude">
          </div>
          <div class=" row-cols-1">
            <button type="submit" class="btn btn-primary" data-bs-dismiss="offcanvas">Save User</button>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      userName: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: '',
      website: '',
    }
  },
  methods: {
    submitNewUser() {
      // this.$store.dispatch('addUser', {
      //   name: this.name,
      //   userName: this.userName,
      //   email: this.email,
      //   address: this.address,
      //   phone: this.phone,
      //   website: this.website
      // })
      this.$emit('add-new-user', {
        name: this.name,
        userName: this.userName,
        email: this.email,
        address: this.address,
        phone: this.phone,
        website: this.website
      })

      this.name = ''
      this.userName = ''
      this.email = ''
      this.address = {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      }
      this.phone = ''
      this.website = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>