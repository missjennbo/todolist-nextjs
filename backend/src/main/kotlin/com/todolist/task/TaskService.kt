package com.todolist.task

import com.todolist.user.UserInfoRepository
import org.springframework.stereotype.Service

@Service
class TaskService(
    private val taskRepository: TaskRepository,
    private val userRepository: UserInfoRepository
) {
    private fun validateUser(userId: Long) {
        userRepository.findUserInfoById(userId) ?: throw Exception("User not found")
    }

    fun getTasksFor(userId: Long): List<Task> {
        validateUser(userId)

        return taskRepository.findAllByUserid(userId)
    }

    fun addTaskFor(userId: Long, description: String): Task {
        val newTask = Task(userid = userId, description = description, done = false)
        return taskRepository.save(newTask)
    }
}