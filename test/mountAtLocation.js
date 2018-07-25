import {MemoryRouter} from 'react-router-dom'
import App from '../src/js/App'

export function mountAppAtLocation(location) {
  return mount(
    <MemoryRouter initialEntries={[location]}>
      <App/>
    </MemoryRouter>
  )
}
