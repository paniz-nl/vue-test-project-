<template>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
        {{user.name}}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">username: {{user.username}}</li>
        <li class="list-group-item">email: {{user.email}}</li>
        <li class="list-group-item">phone: {{user.phone}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
      user:Object
    }
}

</script>

<style>

</style>