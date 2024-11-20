package com.example.backend.user

import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping


@Controller
@RequestMapping("/user")
class UserController(
    private val userService: UserService
) {
    @GetMapping
    fun getUser(): ResponseEntity<UserListDto> {
        return ResponseEntity.ok().body(UserListDto(userService.getAllUsers()))
    }

    data class UserListDto(
        val users: List<UserInfo>
    )

}