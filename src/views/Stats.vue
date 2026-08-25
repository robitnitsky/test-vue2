<template>
  <div class="stats">
    <h2>Stats</h2>
    <div class="cards">
      <div class="card">
        <span class="number">{{ totalCount }}</span>
        <span class="label">Total</span>
      </div>
      <div class="card">
        <span class="number">{{ activeCount }}</span>
        <span class="label">Active</span>
      </div>
      <div class="card">
        <span class="number">{{ doneCount }}</span>
        <span class="label">Done</span>
      </div>
    </div>
    <p class="progress-label">{{ progressLabel }}</p>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters('todos', ['totalCount', 'activeCount', 'doneCount']),
    progressPercent() {
      if (this.totalCount === 0) return 0
      return Math.round((this.doneCount / this.totalCount) * 100)
    },
    progressLabel() {
      return `${this.progressPercent}% complete`
    }
  }
}
</script>

<style scoped>
.stats h2 {
  margin-top: 0;
}

.cards {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.card {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 1.75rem;
  font-weight: 700;
  color: #3867d6;
}

.label {
  color: #a4b0be;
  font-size: 0.85rem;
}

.progress-label {
  color: #57606f;
  margin-bottom: 8px;
}

.progress-bar {
  background: #dfe4ea;
  border-radius: 999px;
  height: 10px;
  overflow: hidden;
}

.progress-bar-fill {
  background: #20bf6b;
  height: 100%;
  transition: width 0.2s ease;
}
</style>
