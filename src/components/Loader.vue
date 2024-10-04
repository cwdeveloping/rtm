<template>
    <div class="loader">
        <div class="bars"></div>
    </div>
</template>

<script>

</script>

<style scoped>
.loader {
    width: 100vw;
    height: 100vh;
    background: black;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bars {
    transform: scale(1.8);
   width: 50.4px;
   height: 44.8px;
   --c: linear-gradient(#1abc9c 0 0);
   background: var(--c) 0%   50%,
          var(--c) 50%  50%,
          var(--c) 100% 50%;
   background-size: 10.1px 100%;
   background-repeat: no-repeat;
   animation: bars-t0lx83md 1s infinite linear;
}

@keyframes bars-t0lx83md {
   33% {
      background-size: 10.1px 10% ,10.1px 100%,10.1px 100%;
   }

   50% {
      background-size: 10.1px 100%,10.1px 10% ,10.1px 100%;
   }

   66% {
      background-size: 10.1px 100%,10.1px 100%,10.1px 10%;
   }
}
</style>