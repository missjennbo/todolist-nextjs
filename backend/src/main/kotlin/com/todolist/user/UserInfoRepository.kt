package com.todolist.user

import jakarta.persistence.*
import org.springframework.data.jpa.repository.JpaRepository

@Entity
@Table(name="USERINFO")
class UserInfo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String? = null,
    var email: String? = null,
)

interface UserInfoRepository : JpaRepository<UserInfo, Long> {
    fun findUserInfoById(id: Long): UserInfo?
}