<script lang="ts" setup>
import { ref, shallowReactive } from 'vue'
import SubmissionTable from './components/submission-table/index.vue'

const dialogTableVisible = ref(false)

const griddata = ref([])

</script>

<template>
  <SubmissionTable></SubmissionTable>
</template>

<style scoped></style>
