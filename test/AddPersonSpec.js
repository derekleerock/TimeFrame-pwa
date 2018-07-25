import {mountAppAtLocation} from './mountAtLocation'
import * as PersonRepo from '../src/js/PersonRepo'
import {clickButton, setInputText} from './simulateUserActions'

let sandbox = sinon.createSandbox()

describe('add person screen', () => {
  let addPersonScreen

  beforeEach(() => {
    addPersonScreen = mountAppAtLocation('/addPerson')
  })

  afterEach(() => {
    sandbox.restore()
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

  it('saves the new person when clicking the add person button', () => {
    let personRepoSpy = sandbox.stub(PersonRepo, 'createPerson')


    setInputText(addPersonScreen, 'personName', 'Frank')
    clickButton(addPersonScreen, 'Add Person')


    sandbox.assert.calledWith(personRepoSpy, {name: 'Frank'})
  })
})
