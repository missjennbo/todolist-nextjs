package com.todolist.task

import com.todolist.user.UserInfo
import com.todolist.user.UserInfoRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.junit.jupiter.api.Assertions.assertTrue

@SpringBootTest
class TaskServiceTest {
    @Autowired
    private lateinit var userRepository: UserInfoRepository

    @Autowired
    private lateinit var taskService: TaskService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    @BeforeEach
    fun setup() {
        userRepository.deleteAll()
        taskRepository.deleteAll()
    }

    private fun createTestUserInfo(): UserInfo {
        val testUser = UserInfo(name = "Max Mustermann", email = "max.mustermann@example.com")
        return userRepository.save(testUser)
    }

    private fun createTestTask(): Task {
        val testTask = Task(userid = 2, description = "I have to do something", done = false)
        return taskRepository.save(testTask)
    }

    @Test
    fun `should read tasks for user from db`(){
        val savedUser = createTestUserInfo()
        val testTask = Task(userid = savedUser.id, description = "I have to do something", done = false)
        taskRepository.save(testTask)

        val tasksFromDb = taskService.getTasksFor(savedUser.id!!)

        assertThat(tasksFromDb.size).isEqualTo(1)
        assertThat(tasksFromDb.first().description).isEqualTo("I have to do something")
        assertThat(tasksFromDb.first().done).isEqualTo(false)
    }


    @Test
    fun `should return empty list for user with zero tasks`(){
        val testUserInfo = createTestUserInfo()
        val tasksFromDb = taskService.getTasksFor(testUserInfo.id!!)
        assertThat(tasksFromDb.isEmpty())
    }

    @Test
    fun `should return error if user does not exist`(){
        createTestTask()

        assertThrows<Exception> { taskService.getTasksFor(2) }.let {
            assertThat(it.message).isEqualTo("User not found")
        }

    }

    @Test
    fun `should toggle done for task`(){
        val testTask = createTestTask()

        taskService.markTask(testTask.id!!)

        assertTrue(taskRepository.findById(testTask.id!!).get().done!!)
    }
}