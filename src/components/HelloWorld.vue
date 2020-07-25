<template>
  <div class="jumbotron custom-bg-dark">
    <h1 class="display-4">MEVN Stack Task Manager</h1>
    <p class="lead">This is a sample Task Manager Application using Mongodb, Express JS, Vue JS and Node JS.</p>
    <hr class="my-4">
    <p>Click below to begin managing tasks.</p>
    <a class="btn btn-success btn-lg" href="#" role="button">View Tasks</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
