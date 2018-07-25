import {set, StorageKeys} from './PersistenceAdapter'

export function createPerson(person) {
  set(StorageKeys.people, [person])
}