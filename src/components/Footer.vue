<template>
  <footer class="footer">
    <p>Website created by Logan Stoltz using Vue, hosted using AWS Amplify</p>
  </footer>
</template>

<script lang="js">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.footer {
    font-family: 'Inter', sans-serif;
    background: var(--main-background-dark);
    position: relative;
    width: 100%;  
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

p {
    color: var(--text-primary);
    font-size: x-large;
    font-weight: bold;
    line-height: 1.7;
}

@media (max-width: 930px) {
  .footer {
    padding: 0rem;
  }
  
  p {
    font-size: 1rem;
  }
}

@media (max-width: 668px) {
  .footer {
    padding: 0rem;
  }
  
  p {
    font-size: 0.6rem;
  }
}
</style>