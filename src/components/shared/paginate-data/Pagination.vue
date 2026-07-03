<template>
  <div>
    <ul>

      <slot :items="items">
        {{ items }}
      </slot>
    </ul>

    <div class="pagination">
      <!-- przerobić na slota -->
      <button
        @click="$emit('previous')"
        :disabled="!hasPrevious"
      >
        Previous
      </button>

      <button
        @click="$emit('next')"
        :disabled="!hasNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    required: true
  },
  hasPrevious: {
    type: Boolean,
    default: false,
  },
  hasNext: {
    type: Boolean,
    default: false,
  },
});

// watch(
//   () => props.items,
//   () => props.key,
//   () => props.columns,
//   () => props.hasNext,
//   () => props.hasPrevious
// );
defineEmits(["previous", "next"]);

</script>
