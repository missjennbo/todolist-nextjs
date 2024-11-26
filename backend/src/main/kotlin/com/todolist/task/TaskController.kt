package com.todolist.task

import com.todolist.user.UserService
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import java.time.Instant
import java.time.format.DateTimeFormatter


@Controller
@RequestMapping("/task")
class TaskController(
    private val taskService: TaskService,
    private val userService: UserService,
) {
    @GetMapping("/hello")
    fun getHello(): ResponseEntity<String> {
        println("${DateTimeFormatter.ISO_INSTANT.format(Instant.now())} Hello")
        return ResponseEntity.ok().body("Hello")
    }

    @GetMapping("/{userId}")
    fun getTasksForUser(@PathVariable("userId") userId: Long): ResponseEntity<List<Task>> {
        userService.validateUser(userId)
        return ResponseEntity.ok().body(taskService.getTasksFor(userId))
    }

    @PostMapping("/create")
    fun addTask(@RequestBody request: AddTaskRequest): ResponseEntity<Task>{
        userService.validateUser(request.userId)
        return ResponseEntity.ok().body(taskService.addTaskFor(request.userId, request.description))
    }

    @PostMapping("/mark/{taskId}")
    fun markTask(@PathVariable("taskId") taskId: Long): ResponseEntity<Task>{
        return ResponseEntity.ok().body(taskService.markTask(taskId))
    }

    @DeleteMapping("/delete/{taskId}")
    fun deleteTask(@PathVariable("taskId") taskId: Long): ResponseEntity<Unit> {
        taskService.deleteTask(taskId)
        return ResponseEntity.ok().build()
    }
}

data class AddTaskRequest(
    val userId: Long,
    val description: String
)