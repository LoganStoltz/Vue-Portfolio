<script>
export default {
  data() {
    return {
      name: 'Logan Stoltz',
      status: true
    };
  },
}

</script>

<template>
  <header class="Header" ref="headerRef" :style="styles">
    <a href="#">Home</a>
    <a href="#">Education</a>
    <a href="#">Projects</a>
    <a href="#">Contact Me</a>
  </header>
</template>


