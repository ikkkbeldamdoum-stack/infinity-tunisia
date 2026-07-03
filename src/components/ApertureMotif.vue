<template>
  <div class="motif" :class="{ small: size === 'small' }" aria-hidden="true">
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <g class="blade-group">
        <!-- 4 lames en losange, comme les pales d'un diaphragme d'objectif -->
        <rect class="blade blade-1" x="170" y="20" width="120" height="120" rx="26" transform="rotate(45 230 80)" />
        <rect class="blade blade-2" x="170" y="260" width="120" height="120" rx="26" transform="rotate(45 230 320)" />
        <rect class="blade blade-3" x="20" y="170" width="120" height="120" rx="26" transform="rotate(45 80 230)" />
        <rect class="blade blade-4" x="260" y="170" width="120" height="120" rx="26" transform="rotate(45 320 230)" />
        <rect class="core" x="160" y="160" width="80" height="80" rx="20" transform="rotate(45 200 200)" />
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'normal' },
})
</script>

<style scoped>
.motif {
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}
.motif.small {
  max-width: 120px;
}
.motif svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}
.blade-group {
  transform-origin: 200px 200px;
  animation: breathe 7s ease-in-out infinite;
}
.blade {
  fill: var(--gold);
}
.blade-1 { transform-origin: 230px 80px; }
.blade-2 { transform-origin: 230px 320px; }
.blade-3 { transform-origin: 80px 230px; }
.blade-4 { transform-origin: 320px 230px; }
.core {
  fill: var(--ink);
}

@keyframes breathe {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(8deg) scale(1.035); }
}

@media (prefers-reduced-motion: reduce) {
  .blade-group {
    animation: none;
  }
}
</style>
