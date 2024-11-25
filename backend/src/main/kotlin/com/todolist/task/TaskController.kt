package com.todolist.task

import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import java.time.Instant
import java.time.format.DateTimeFormatter


@Controller
@RequestMapping("/task")
class TaskController(
    private val taskService: TaskService
) {
    @GetMapping("/hello")
    fun getHello(): ResponseEntity<String> {
        println("${DateTimeFormatter.ISO_INSTANT.format(Instant.now())} Hello")
        return ResponseEntity.ok().body("Hello")
    }

    @GetMapping("/{userId}")
    fun getTasksForUser(@PathVariable("userId") userId: Long): ResponseEntity<List<Task>> {
        return ResponseEntity.ok().body(taskService.getTasksFor(userId))
    }
}