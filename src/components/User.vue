<template>
	<li className='user__items'>
		<img className='user-item__image' :src='user.avatar' alt='avatar' />
		<div className="user-item__info">
			<h4 className="user-item__name">
				{{ user.first_name }} {{ user.last_name }}
			</h4>
			<div className="user-item__email">
				<Icon icon="entypo:email" />
				<p>{{ user.email }}</p>
			</div>
		</div>
		<button
			@click="userStore.changeUserStatus(user.id)"
			className="user-item__add">
			<Icon v-if="user.isInvited" icon="mdi:minus" />
			<Icon v-else icon="mdi:plus" />
		</button>
	</li>
</template>

<script setup lang='ts'>
import { IUser } from '@/types/user';
import { Icon } from '@iconify/vue';
import { useUserStore } from '../stores//todoStore';

const userStore = useUserStore()

defineProps<{
	user: IUser
}>()

</script>