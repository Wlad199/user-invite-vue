<template>
	<div class="container">
		<Users v-if="!userStore.success" />
		<Success v-else />
	</div>
</template>

<script setup lang="ts">
import Users from "./components//Users.vue";
import Success from "./components/Success.vue";
import { useUserStore } from "./stores/todoStore";

const userStore = useUserStore()
</script>

