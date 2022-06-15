<template>
  <section class="juusto">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <main>
      <section class="flex justify-between m-52">
        <span class="text-3xl font-bold underline">icon</span>
        <span>Kiwi-Notes</span>
        <span>icon</span>
      </section>
    </main>
    <font-awesome-icon :icon="['fas', 'phone']" />
  </section>
</template>
<script lang="ts">
export default {
  name: "HomeContainer",
};
</script>
<style>
.juusto {
  height: 100%;
  background-color: rgb(197, 197, 255);
}
</style>
