const SinglyLinkedList = require('./singly-linked-list')

const singlyLinkedList = new SinglyLinkedList()

it('pushes a node', () => {
  expect(singlyLinkedList.push('Hi').length).toBe(1)
  expect(singlyLinkedList.push('there').length).toBe(2)
  expect(singlyLinkedList.push('how').length).toBe(3)
  expect(singlyLinkedList.push('are').length).toBe(4)
})

it('pops a node', () => {
  expect(singlyLinkedList.pop()).toBe(undefined)
})
