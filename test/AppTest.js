import App from '../src/App'

describe('app', () => {
  it('shallow renders the component', () => {
    const app = shallow(<App/>)
    expect(app).toBeDefined()
  })

  it('mounts the component', () => {
    const app = mount(<App/>)
    expect(app).toBeDefined()
  })
})
