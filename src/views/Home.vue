<template>
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
     
</template>

<script>
import AddTask from '../components/AddTask'
import Tasks from '../components/Tasks'

export default {
    name: 'Home',
    components: {
        AddTask,
        Tasks,
    },
    props: {
        showAddTask: Boolean,
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        async deleteTask(id) {
            if(confirm('Are you sure?')) {
        
                const res = await fetch(`api/tasks/${id}` , { method: 'DELETE'})

                res.status = 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
            }
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)
            const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })

            const data = await res.json()

            this.tasks = this.tasks.map((task) => task.id === id ? {...task,reminder: data.reminder} : task)
        },
        async addTask(task) {
            const res = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })

            const data = await res.json()

            this.tasks = [...this.tasks, data]

        },

        async fetchTasks() {
            const res = await fetch('api/tasks')
            
            const data = await res.json()

            return data
        }, 
        async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`)
            
            const data = await res.json()

            return data
            }
        },

    async created() {
        this.tasks = await this.fetchTasks()
    }
}
</script>