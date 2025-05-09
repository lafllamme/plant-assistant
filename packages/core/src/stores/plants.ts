// packages/core/src/stores/plants.ts
import { defineStore } from 'pinia'

export interface Plant {
  id: string
  name: string
  species: string
  image?: string // optional – URL or base64
  lastWatered?: string // ISO date‑time
}

/**
 * Keeps the user’s plants in a reactive state.
 * Pure domain logic – no browser APIs – so it works
 * in SSR and mobile contexts and is straightforward to unit‑test.
 */
export const usePlants = defineStore('plants', () => {
  /* ---------------- state ---------------- */
  const plants = ref<Plant[]>([])

  /* -------------- getters --------------- */
  const plantMap = computed(() =>
    plants.value.reduce<Record<string, Plant>>((acc, p) => {
      acc[p.id] = p
      return acc
    }, {}),
  )

  /* -------------- actions --------------- */
  function addPlant(plant: Plant) {
    if (!plantMap.value[plant.id])
      plants.value.push({ ...plant })
  }

  function removePlant(id: string) {
    const i = plants.value.findIndex(p => p.id === id)
    if (i !== -1)
      plants.value.splice(i, 1)
  }

  function updatePlant(partial: Partial<Plant> & { id: string }) {
    const i = plants.value.findIndex(p => p.id === partial.id)
    if (i !== -1)
      plants.value[i] = { ...plants.value[i], ...partial }
  }

  /** helper: mark as watered “now” (or pass custom date) */
  function markWatered(id: string, date = new Date().toISOString()) {
    updatePlant({ id, lastWatered: date })
  }

  return {
    // state
    plants,
    // getters
    plantMap,
    // actions
    addPlant,
    removePlant,
    updatePlant,
    markWatered,
  }
})
