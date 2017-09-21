<template>
  <div class="hello">
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
    <h2>Projects</h2>
    <ul>
      <li><a href="https://huosuxue.com/" target="_blank">火速学</a></li>
      <li><a href="https://youdua.com/" target="_blank">有度啊</a></li>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #0366d6;
}
</style>
