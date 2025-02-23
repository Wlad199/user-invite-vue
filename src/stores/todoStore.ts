import { defineStore } from "pinia"
import { computed, onMounted, ref } from "vue"
import type { IUser } from "@/types/user"
import axios from "axios"

export const useUserStore = defineStore('userStore', () => {

	const users = ref<IUser[]>([])
	const success = ref<boolean>(false)
	const inputValue = ref('')

	const fetchUsers = async () => {
		try {
			const response = await axios.get('https://reqres.in/api/users')
			const data = await response.data.data
			users.value = data.map(user => ({ ...user, isInvited: false }))
			success.value = false
		} catch (err) {
			console.log(err.message)
		}
	}

	const changeUserStatus = (id: number) => {
		const chossenUser = users.value.find(user => user.id === id)
		chossenUser.isInvited = !chossenUser.isInvited
	}

	const toggleSuccess = () => {
		success.value = !success.value
	}

	const showInvites = computed(() => {
		return users.value.filter(user => user.isInvited).length
	})

	const computedUsers = computed(() => {
		return users.value.
			filter(user => {
				const data = `${user.first_name} ${user.last_name} ${user.email}`.toLocaleLowerCase()
				return data.includes(inputValue.value.toLocaleLowerCase())
			})
	})

	onMounted(() => {
		fetchUsers()
	})

	return {
		users,
		success,
		inputValue,
		changeUserStatus,
		showInvites,
		toggleSuccess,
		fetchUsers,
		computedUsers
	}

})