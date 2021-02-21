<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="height"
      :width="width"
      :class="icon"
      :viewBox="viewBox"
    >
      <component :is="icon" />
    </svg>
  </div>
</template>

<script src="./Econ.ts"></script>
