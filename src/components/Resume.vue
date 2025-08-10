<template>
  <div class="pdf-viewer">
    <iframe
      src="/LoganStoltzPortfolio.pdf"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pdf-viewer {
  background: var(--main-background-dark);
  padding: 0rem;
  display: flex;
  justify-content: center;
}

iframe {
  max-width: 1000px;
  width: 100%;
  height: 1122px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: white;
}

/* Responsive */
@media (max-width: 768px) {
  iframe {
    height: 682px;
  }
}
</style>