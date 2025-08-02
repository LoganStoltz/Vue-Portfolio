<template>
  <div class="pdf-viewer">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="1122px"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
import pdfFile from '@/assets/LoganStoltzPortfolio.pdf';

export default {
  data() {
    return {
      pdfUrl: pdfFile
    };
  }
};
</script>

<style scoped>
.pdf-viewer {
  background: var(--main-background-dark);
  padding: 2rem;
  display: flex;
  justify-content: center;
}

iframe {
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: white;
}
</style>
