package com.todolist.user

import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping


@Controller
@RequestMapping("/user")
class UserController(
    private val userService: UserService
) {
    @GetMapping
    fun getUser(): ResponseEntity<List<UserInfo>> {
        return ResponseEntity.ok().body(userService.getAllUsers())
    }

    @GetMapping("/{userId}")
    fun getUserInfo(@PathVariable("userId") userId: Long): ResponseEntity<UserInfo> {
        return ResponseEntity.ok().body(userService.getUserById(userId))
    }
}