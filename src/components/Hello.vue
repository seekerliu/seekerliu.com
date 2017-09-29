<template>
  <div class="hello">
    <img class="avatar" src="../assets/avatar.jpeg">
    <h1>{{ msg }}</h1>
    <p>A PHP Artisan.</p>
    <h2>Lessons</h2>
    <ul>
      <li>
        <a href="https://github.com/seekerliu/laravel-tips" target="_blank">laravel-tips</a>
      </li>
    </ul>
    <h2>Packages</h2>
    <ul>

      <li>
        <a href="https://github.com/seekerliu/laravel-another-json" target="_blank">laravel-another-json</a>
      </li>
      <li>
        <a href="https://github.com/seekerliu/laravel-readme-viewer" target="_blank">laravel-readme-viewer</a>
      </li>
      <li>
        <a href="https://github.com/seekerliu/laravel-ddns" target="_blank">laravel-ddns</a>
      </li>
      <li>
        <a href="https://github.com/seekerliu/laravel-view-composer-generator" target="_blank">laravel-view-composer-generator</a>
      </li>
    </ul>
    <h2>Vision</h2>
    <ul>
      <li><router-link to="/road">Road of Future</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'SeekerLiu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  width: 150px;
  height: 150px;
  border: 1px solid white;
  border-radius: 50%;
}
</style>
