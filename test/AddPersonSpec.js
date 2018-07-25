import {mountAppAtLocation} from './mountAtLocation'

describe('add person screen', () => {
  it('displays a close button on the add new person screen', () => {
    const app = mountAppAtLocation('/addPerson')

    expect(app.find('a.close').props().href).toEqual('/')
  })
})
