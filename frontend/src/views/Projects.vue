<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div class="row">
          <div v-for="post in posts" class="post-item col-sm-4" :key="post._id">
            <h3>title</h3>
            {{post.title}} <br>
            <h3>bannerImage</h3>
            {{post.bannerImage}} <br>
            <h3>content</h3>
            {{post.content}} <br>
            <h3>technologies</h3>
            {{post.technologies}} <br>
            <h3>collaborators</h3>
            {{post.collaborators}} <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
const query = `*[_type == "project"]{
  title,
  bannerImage,
  content,
  technologies,
  collaborators
}[0...50]`;

export default {
  name: 'Projects',
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
