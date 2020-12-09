<template>
  <div class="adminlogin">
    <div class="form-logo-wrapper">
      <img class="form-signin-logo mb-4" src="../assets/KittyLucifer-logo-s.png" alt="">
    </div>
    <form class="form-signin">
      <h1 class="form-signin-title h3 mb-3 font-weight-bold">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
    </form>
  </div>
</template>



<script>
export default {
  name:'Adminlogin',
  components:{

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all";

html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-logo-wrapper{
  width: 100%;
  height: 65px;
  position: relative;
  margin: 50px 0 20px 0;
  .form-signin-logo{
    display: block;
    width: 80px;
    height: 65px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  .form-signin-title{
    text-align: center;
  }
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>