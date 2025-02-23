<template>
	<div className="success-block">
		<div>
			<Icon icon="iconoir:check" />
		</div>
		<h2>Успешно</h2>
		<p>Всем {{ userStore.showInvites }} пользователям отправлено приглашение.</p>
		<button
			@click="userStore.fetchUsers()"
			className="button button__success">
			Назад
		</button>
	</div>
</template>

<script setup lang='ts'>
import { Icon } from '@iconify/vue';
import { useUserStore } from '../stores//todoStore';

const userStore = useUserStore()
</script>
