package com.todolist.user

import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserInfoRepository) {
    fun getAllUsers(): List<UserInfo> {
        return userRepository.findAll()
    }

    fun getUserById(userId: Long): UserInfo? {
        return userRepository.findUserInfoById(userId)
    }

    fun validateUser(userId: Long) {
        userRepository.findUserInfoById(userId) ?: throw Exception("User not found")
    }
}