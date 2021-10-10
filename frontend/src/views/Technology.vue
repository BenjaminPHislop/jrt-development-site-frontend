<template>
  <div class="technology">
    <h1>Technology</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div class="row">
          <div v-for="post in posts" class="post-item col-sm-4" :key="post._id">
            <a :href="`${post.documentation}`" target="_blank">
              <h2>{{ post.name }}</h2>
            </a>
            <p>{{post.techImage.asset._ref}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const query = `*[_type == "technology"]{
  name,
  slug,
  techImage,
  documentation
}[0...50]`;

export default {
  name: 'Technology',
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
