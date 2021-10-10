<template>
  <div class="blog">
    <h1>Blog</h1>
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
            <h3>headline</h3>
            {{post.headline}} <br>
            <h3>publishDate</h3>
            {{post.publishDate}} <br>
            <h3>technologies</h3>
            {{post.technologies}} <br>
            <h3>writer</h3>
            {{post.writer}} <br>
            <h3>bannerImage</h3>
            {{post.bannerImage}} <br>
            <h3>content</h3>
            {{post.content}} <br>
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
const query = `*[_type == "article"]{
  title,
  headline,
  publishDate,
  technologies,
  writer,
  bannerImage,
  content,
  slug
}[0...50]`;

export default {
  name: 'Blog',
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
