<template>
  <div class="loading-container flex justify-center items-center absolute inset-0" h="screen" m="auto">
    <div class="spinner" />
  </div>
</template>

<style>
.loading-container {
  background-color: rgba(0, 0, 0, 0.7);
}

.spinner {
  width: 60px;
  height: 60px;
  border: 1px solid white;
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
