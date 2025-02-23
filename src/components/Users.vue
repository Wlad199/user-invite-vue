<template>
	<div className="search">
		<Icon class="search-icon" icon="material-symbols-light:search" />
		<input
			v-model="userStore.inputValue"
			type="search"
			placeholder='Найти пользователя' />
	</div>
	<ul className="user__list">
		<User v-for="user in userStore.computedUsers" :key="user.id" :user="user" />
	</ul>
	<button
		@click="userStore.toggleSuccess"
		v-show="userStore.showInvites"
		className='button button__send'>
		Отправить приглашение
	</button>
</template>

<script setup lang='ts'>
import User from "./User.vue";
import { useUserStore } from "@/stores/todoStore";
import { Icon } from '@iconify/vue';

const userStore = useUserStore()
</script>

<style scoped  lang='scss'>
.search-icon {
	font-size: 28px;
}
</style>