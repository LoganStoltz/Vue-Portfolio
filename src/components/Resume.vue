<template>
  <div class="pdf-viewer">
    <iframe :src="pdfUrl" type="application/pdf"></iframe>
  </div>
</template>

<script>
import pdfFile from "/LoganStoltzPortfolio.pdf";

export default {
  data() {
    return {
      pdfUrl: pdfFile
    };
  }
};
</script>

<style>
.pdf-viewer {
  background: var(--main-background-dark, #1a1a1a);
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  min-height: 100vh;
}

iframe {
  max-width: 1000px;
  width: 100%;
  height: 1122px;
  box-shadow: 0 0 20px rgba(0,0,0,0.25);
  background: white;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  .pdf-viewer {
    min-height: 0;
  }

  iframe {
    height: 682px;
  }
}
</style>
