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
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 </li>
        <li class="nav-item dropdown">
                    <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Task List 1</a></li>
            <li><a class="dropdown-item" href="#">Task List 2</a></li>
            <li><hr class="dropdown-divider"></li>
            
          </ul>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
          </div>
    <TaskBoard />
  </div>
</nav>
</header>


</template>

<style scoped></style>
