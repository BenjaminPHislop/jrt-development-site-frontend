<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <router-link class="navbar-brand" to="/">
      <img src="../assets/images/logo.png" alt="" class="img-fluid">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/developers">
            Developers 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">
            Projects
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">
            Blog
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/technology">
            Technology
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.thejrtagency.com/news/category/careers" target="_blank" rel="noopener">
            Careers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.thejrtagency.com/" target="_blank" rel="noopener">
            The JRT agency
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.cgdetroit.com/" target="_blank" rel="noopener">
            CG Detroit<sup>&reg;</sup>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  border: solid 5px black;
}
.nav-link {
  color: #000000;
}
.nav-link:hover {
  color: #F66F40;
}
.nav-link:active {
  color: #F66F40;
}
.nav-link:focus {
  color: #F66F40;
}
.navbar-brand {
  width: 175px;
  margin-left: 1.5rem;
}
.navbar-light .navbar-toggler {
  border-width: 4px;
  border-color: black;
  border-radius: 0;
}
.navbar-expand-lg .navbar-nav {
  justify-content: space-evenly;
  width: 100%;
}
#logo  {
    fill: #F66F40;
}
</style>