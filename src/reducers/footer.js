const HIGHLIGHT_FILTER = 'HIGHLIGHT_FILTER'

export const highlightFilter = (filter) => ({type: HIGHLIGHT_FILTER, payload: filter})

export default function(state='', action) {
  switch (action.type) {
    case HIGHLIGHT_FILTER:
      return action.payload
    default:
      return state
  }
}