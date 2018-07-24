import App from '../src/js/App'
import {MemoryRouter} from 'react-router-dom'

describe('app', () => {
  it('displays a header with the title', () => {
    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    )

    expect(app.text()).toContain("TimeFrame")
  })

  it('display a button to add a new person', () => {
    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    )
    expect(app.find('a').text()).toEqual('Add New Person')
  })

  it('navigates to new person screen when adding a new person', () => {
    const app = mount(
      <MemoryRouter initialEntries={['/', '/addPerson']}>
        <App/>
      </MemoryRouter>
    )

    expect(app.find('a').props().href).toEqual('/addPerson')
  })
})
