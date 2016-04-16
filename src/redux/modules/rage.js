const ANIMATE = 'blog/rage/ANIMATE'
const ANIMATE_END = 'blog/rage/ANIMATE_END'

const initialState = {
  queue: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ANIMATE:
      return {
        ...state,
        queue: [...state.queue, action.animateId]
      }
    case ANIMATE_END:
      return {
        ...state,
        queue: state.queue.slice(1)
      }
    default:
      return state
  }
}
