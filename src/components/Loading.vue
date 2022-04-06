<template>
  <div class="absolute loading-container flex justify-center items-center fixed inset-0" h="screen" m="auto">
    <div class="spinner" />
  </div>
</template>

<style>
.loading-container {
  background-color: rgba(255, 255, 255, 0.3);
}

.spinner {
  width: 60px;
  height: 60px;
  border: 1px solid black;
  margin: 100px auto;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }

  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}
</style>
