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
    class="wrapper relative flex justify-center items-center"
    w="140"
    p="2"
    m="y-4"
    border="~ rounded gray-200 dark:gray-700"
    rounded="full"
  >
    <i-ri-search-line class="inline-flex" />
    <input
      id="input"
      :value="modelValue"
      w="122"
      m="x-3"
      :aria-label="t('placeholder.search')"
      type="text"
      autocomplete="false"
      bg="transparent"
      outline="none active:none"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.enter="enter"
    >
  </div>
</template>
