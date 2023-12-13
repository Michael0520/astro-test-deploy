<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <div>
    <button
      type="button"
      class="btn"
      :class="{
        'btn-primary': props.modelValue,
        'btn-secondary': !props.modelValue,
      }"
      @click="$emit('update:modelValue', !props.modelValue)"
    >
      <slot />
    </button>
  </div>
</template>
