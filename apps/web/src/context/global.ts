import { Store } from '@tanstack/react-store'

type State = {
  isLoading    : boolean;
  isNavigating : boolean;
}

export const globalStore = new Store<State>({ 
  isLoading: false, 
  isNavigating: false 
})

export const setLoading = (isLoading: boolean) => {
  globalStore.setState((s) => ({ ...s, isLoading: isLoading }))
}