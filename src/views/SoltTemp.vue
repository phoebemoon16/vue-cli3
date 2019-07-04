<template>
  <div class="container">
      <header>
          <slot name="header"></slot>
      </header>
      <main>
          <slot></slot>
      </main>
      <footer>
          <slot name="footer"></slot>
      </footer>
  </div>
</template>
<style lang="scss">
.container {
  header {
    background: none;
    color: white;
    font-size: 12px;
  }
  footer {
    margin-top: 200px;
    color: black

  }
}
</style>
