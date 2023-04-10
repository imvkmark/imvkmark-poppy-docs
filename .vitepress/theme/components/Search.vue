<template>
    <div v-if="__VITE_IS_VERCEL__ === 'N'">
        <input type="search" class="search-input" id="search-bar-input" placeholder="输入 '/' 搜索" readonly @click="isOpen=true"/>
    </div>
    <ElDialog v-model="isOpen">
        <iframe class="iframe" :src="`https://i.huowanes.com/misc/search/meili?index=${host}`"/>
    </ElDialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isOpen = ref(false);
const host = __VITE_MEILISEARCH_INDEX__;

onMounted(() => {
    document.addEventListener('keypress', (k) => {
        if (k.key === '/') {
            isOpen.value = true;
        }
    })
})
</script>

<style scoped>
.iframe {
    width: 100%;
    border: none;
    min-height: 80vh;
}

.search-input {
    font-size: 13px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 0 8px;
}
</style>
