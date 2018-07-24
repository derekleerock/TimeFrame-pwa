import App from '../src/js/App'

describe('app', () => {
  it('displays a header with the title', () => {
    const app = mount(<App/>)
    expect(app.text()).toContain("TimeFrame")
  })

  it('display a button to add a new person', () => {
    const app = shallow(<App/>)
    expect(app.find('button').text()).toEqual('Add New Person')
  })
})
