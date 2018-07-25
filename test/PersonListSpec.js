import {mountAppAtLocation} from './mountAtLocation'

describe('app', () => {
  let app

  beforeEach(() => {
    app = mountAppAtLocation('/')
  })

  it('displays a header with the title', () => {
    expect(app.text()).toContain("TimeFrame")
  })

  it('display a button to add a new person', () => {
    expect(app.find('a').text()).toEqual('Add New Person')
  })

  it('navigates to new person screen when adding a new person', () => {
    expect(app.find('a').props().href).toEqual('/addPerson')
  })
})
