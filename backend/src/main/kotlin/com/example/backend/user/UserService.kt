package com.example.backend.user

import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserInfoRepository) {
    fun getAllUsers(): List<UserInfo> {
        return userRepository.findAll()
    }
}