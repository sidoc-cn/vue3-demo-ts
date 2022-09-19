<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

let iconName = computed(() => {
    return `#icon-${props.name}`;
});
</script>

<style>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
