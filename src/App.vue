<script setup>
import { ref } from 'vue'
import TaskBoard from './components/TaskBoard.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary p-4">
      <div>
        <h1>Team Donatello Task Management App</h1>
      </div>
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Nav</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Recent Tasks
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Task List 1</a></li>
            
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
             </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Enter</button>
      </form>
    </div>
    <TaskBoard />
  </div>
</nav>
</header>
</template>

<style scoped></style>
