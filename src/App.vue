<template>
  <div id="app">
    <nav class="navbar">
      <router-link class="navbar-brand" to="/">
        <img class="navbar-logo" src="./assets/KittyLucifer-logo.png" alt="logo">
      </router-link>
      <div class="navbar-wrapper">
        <ul class="navbar-list">
          <li class="nav-item">
            <router-link class="nav-link bottom-line" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="social-icon-wrapper">
        <form class="search-wrapper">
          <span class="search-icon"><i class="fa fa-search"></i></span>
          <input class="search-bar" type="search" placeholder="Search" aria-label="Search">
        </form>
        <ul class="social-icon-list">
           <li class="social-icon-item">
            <router-link class="social-icon-link" to="/login"><i class="fas fa-user"></i></router-link>
          </li>
           <li class="social-icon-item">
            <router-link class="social-icon-link" to="/login"><i class="fas fa-heart"></i></router-link>
          </li>
           <li class="social-icon-item">
            <router-link class="social-icon-link" to="/login"><i class="fas fa-shopping-cart"></i></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Alegreya', 'Noto Sans TC', serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar{
  display: flex;
  align-items: center;
  justify-content: space-around;
  a{
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 18px;
  }
  .navbar-logo{
    height: 40px;
  }
  .navbar-list{
    display: flex;
    align-items: center;
    list-style: none;
    .nav-item{
      margin-right: 10px;
      padding: 10px;
      .nav-link{
        padding: 10px;
        &:hover{
          border-bottom: 3px solid  rgb(189, 30, 30);
        }
      }
    }
  }
  .social-icon-wrapper{
    display: flex;
    align-items: center;
    .search-wrapper{
      position: relative;
      .search-bar{
        width: 200px;
        height: 35px;
        background: #eeeeee;
        border: none;
        font-size: 10pt;
        float: left;
        color: #4b4b4b;
        padding-left: 35px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        &::-webkit-input-placeholder {
          color: #787878;
        }  
      }
      .search-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-40%);
        left: 5%;
        z-index: 1;
        color: #787878;
      }
    }
    .social-icon-list{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    .social-icon-item{
      padding: 10px;
      .social-icon-link{
        padding: 10px;
        &:hover{
          color: rgb(189, 30, 30);
        }
      }
    }
  }
  }
}

</style>
