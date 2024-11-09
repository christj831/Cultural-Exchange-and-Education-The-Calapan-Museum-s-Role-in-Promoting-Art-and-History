<template>
    <div class="homepage-container">
      <h1>Welcome to the Homepage</h1>
      <p>Hello, <strong>{{ userName }}</strong></p>
      <p>Email: <strong>{{ userEmail }}</strong></p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: '',
        userEmail: '',
      };
    },
    created() {
      // Retrieve user data from localStorage when the component is created
      this.userName = localStorage.getItem('user_name');
      this.userEmail = localStorage.getItem('user_email');
    },
    methods: {
      logout() {
        // Remove token and user data from localStorage
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        this.$router.push('/login'); // Redirect to login page
      },
    },
  };
  </script>
  
  <style scoped>
  .homepage-container {
    text-align: center;
    padding: 20px;
  }
  </style>
  