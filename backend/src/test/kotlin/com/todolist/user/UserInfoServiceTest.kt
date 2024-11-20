package com.todolist.user

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class UserInfoServiceTest {
    @Autowired
    private lateinit var userRepository: UserInfoRepository

    @BeforeEach
    fun setup() {
        userRepository.deleteAll()
    }

    @Test
    fun `should return empty list`(){
        assertThat(userRepository.findAll()).isEmpty()
    }

}