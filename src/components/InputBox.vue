<script lang="ts" setup>
const { t } = useI18n()

defineProps<{
  modelValue: string
  enter: (e: KeyboardEvent) => void
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="sese-search-wrapper wrapper relative flex justify-center items-center"
    p="2"
    m="y-4"
    border="~ rounded gray-300 dark:gray-700"
    rounded="full"
  >
    <i-ri-search-line class="inline-flex ml-2" />
    <input
      id="input"
      class="sese-input"
      :value="modelValue"
      m="x-2"
      :aria-label="t('placeholder.search')"
      type="text"
      autocomplete="false"
      bg="transparent"
      outline="none active:none"
      @input="$emit('update:modelValue', ($event.target as any).value)"
      @keydown.enter="enter"
    >
  </div>
</template>

<style lang="scss">
.sese-search-wrapper {
  transition: 0.4s;
  &:hover {
    --tw-shadow: 0 10px 30px -10px rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);
    -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  }

}

.sese-input {
  @apply w-122;
}

@media (max-width: 639.9px) {
  .sese-input {
    width: calc(100vw - 8rem);
  }
}

</style>
