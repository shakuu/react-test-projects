export const NAVIGATE_HISTORY = 'NAVIGATE_HISTORY'

export function navigateHistory(historyIndex) {

  return {
    type: NAVIGATE_HISTORY,
    historyIndex
  }
}
