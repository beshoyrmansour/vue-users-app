import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    showAddNewUser: false,
    favoriteUsers: [],
    test: 'test'
  },
  getters: {
    usersWithImages: state => {
      return state.users.map(user => {
        user.image = `https://randomuser.me/api/portraits/th`
        user.avatar = `https://xsgames.co/randomusers/assets/avatars/${(user.id % 2) ? 'male' : 'female'}/${user.id}.jpg`;
        user.isFavorite = state.favoriteUsers.includes(user.id);

        return user
      })
    }

  },
  mutations: {
    removeFavoriteUser(state, payload) {
      state.favoriteUsers = state.favoriteUsers.filter(u => u !== payload.id)
    },
    addFavoriteUser(state, payload) {
      state.favoriteUsers.push(payload.id)

    },
    setUsers(state, payload) {
      state.users = payload
    },
    setFavoriteUsers(state, payload) {
      state.favoriteUsers = payload
    },
    removeUser(state, payload) {
      state.users = state.users.filter(u => u.id !== payload.id)
    },
    toggleShowAddNewUser(state) {
      state.showAddNewUser = !state.showAddNewUser

    },
    addUser(state, payload) {
      state.users.push(payload)
    },
  },
  actions: {
    toggleFavoriteUser({ commit, state }, user) {
      if (state.favoriteUsers.includes(user.id)) {
        commit('removeFavoriteUser', user)
      } else {
        commit('addFavoriteUser', user)
      }
    },

    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      commit('setUsers', json)
    },

    async fetchFavoriteUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      commit('setFavoriteUsers', json)
    },

    async deleteUser({ commit, state }, user) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'DELETE'
      })
      if (state.favoriteUsers.includes(user.id)) {
        commit('removeFavoriteUser', user)
      }
      commit('removeUser', user)
    },

    toggleShowAddNewUser({ commit }) {
      console.log('toggleShowAddNewUser');
      commit('toggleShowAddNewUser')
    },

    async addNewUser({ commit, dispatch }, user) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const json = await response.json();
      commit('addUser', json)
      dispatch('toggleShowAddNewUser')
    },

  },
  modules: {
  }
})
