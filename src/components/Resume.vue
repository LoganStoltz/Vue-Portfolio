<template>
  <div class="pdf-viewer">
    <embed src="/LoganStoltzPortfolio.pdf" type="application/pdf" />
  </div>
</template>

<style>
.pdf-viewer {
  background: var(--main-background-dark, #1a1a1a);
  display: flex;
  justify-content: center;
  padding: 0;
}

embed {
  max-width: 1000px;
  width: 100%;
  height: 1122px;
  box-shadow: 0 0 20px rgba(0,0,0,0.25);
  background: white;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  embed {
    height: 682px;
  }
}
</style>
