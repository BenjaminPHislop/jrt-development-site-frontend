<template>
  <div class="developers">
    <h1>Developers</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div class="row">
          <div v-for="post in posts" class="post-item col-sm-4" :key="post._id">
            <h3>name</h3>
            {{post.name}} <br>
            <h3>role</h3>
            {{post.role}} <br>
            <h3>yearsEmployed</h3>
            {{post.yearsEmployed}} <br>
            <h3>technologies</h3>
            {{post.technologies}} <br>
            <h3>profilePicture</h3>
            {{post.profilePicture}} <br>
            <h3>aboutDeveloper</h3>
            {{post.aboutDeveloper}} <br>
            <h3>slug</h3>
            {{post.slug}} <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
const query = `*[_type == "developer"]{
  name,
  role,
  yearsEmployed,
  technologies,
  profilePicture,
  aboutDeveloper,
  slug
}[0...50]`;

export default {
  name: 'Developers',
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
}
</script>
