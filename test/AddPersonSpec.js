import {mountAppAtLocation} from './mountAtLocation'

describe('add person screen', () => {
  let addPersonScreen

  beforeEach(() => {
    addPersonScreen = mountAppAtLocation('/addPerson')
  })

  it('displays a close button on the add new person screen', () => {
    expect(addPersonScreen.find('a.close').props().href).toEqual('/')
  })

  it('displays the screen title', () => {
    expect(addPersonScreen.text()).toContain('Add A Person')
  })

  it('displays the label for the persons name', () => {
    expect(addPersonScreen.text()).toContain('Name')
  })

  it('displays the input field with a placeholder', () => {
    expect(addPersonScreen.find('input').props().placeholder).toEqual('enter a name')
  })
})
