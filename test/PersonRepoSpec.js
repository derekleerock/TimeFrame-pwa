import {createPerson} from '../src/js/PersonRepo'
import * as PersistenceAdapter from '../src/js/PersistenceAdapter'

describe('person repo', () => {
  it('saves a person to storage when there are no people', () => {
    let persistenceAdapterSpy = sandbox.stub(PersistenceAdapter, 'set')

    createPerson({name: 'Frank'})

    sandbox.assert.calledWith(persistenceAdapterSpy, 'people', [{name: 'Frank'}])
  })
})
