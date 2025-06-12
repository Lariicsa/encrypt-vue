<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex relative w-full justify-center items-center">
    <header>
      <div>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <div class="flex relative w-full max-w-[980px]">
      <RouterView />
    </div>
  </div>

</template>
