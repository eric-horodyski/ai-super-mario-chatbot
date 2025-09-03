<template>
  <span class="coin" role="img"></span>
</template>

<style scoped>
  .coin {
    display: inline-block;
    width: 40px;
    height: 68px;
    background: url('/sprites/coin-sprite@4x.png') 0 0 no-repeat;
    image-rendering: pixelated;
    animation: coin-spin 0.6s steps(3) infinite;
  }
  @keyframes coin-spin {
  from { background-position:    0 0; }
  to   { background-position: -120px 0; } /* 3 frames × 40px */
}

</style>