package com.example.backend.task

import jakarta.persistence.*
import org.springframework.data.jpa.repository.JpaRepository

@Entity
@Table(name="TASK")
class Task(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    val userid: Long? = null,
    val description: String? = null,
    var done: Boolean? = null
)

interface TaskRepository : JpaRepository<Task, Long> {
    fun findAllByUserid(userId: Long): List<Task>
}