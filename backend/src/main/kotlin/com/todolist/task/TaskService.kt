package com.todolist.task

import com.todolist.user.UserInfoRepository
import org.springframework.stereotype.Service

@Service
class TaskService(
    private val taskRepository: TaskRepository,
    private val userRepository: UserInfoRepository
) {
    fun getTasksFor(userId: Long): List<Task> {
        userRepository.findUserInfoById(userId) ?: throw Exception("User not found")

        return taskRepository.findAllByUserid(userId)
    }
}