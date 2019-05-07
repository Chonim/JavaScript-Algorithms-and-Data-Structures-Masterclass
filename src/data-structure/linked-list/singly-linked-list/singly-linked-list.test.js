const SinglyLinkedList = require('./singly-linked-list')

const singlyLinkedList = new SinglyLinkedList()

describe('Linked List', () => {
  it('pushes a node', () => {
    expect(singlyLinkedList.push('Hi').length).toBe(1)
    expect(singlyLinkedList.push('there').length).toBe(2)
    expect(singlyLinkedList.push('how').length).toBe(3)
    expect(singlyLinkedList.push('are').length).toBe(4)
  })

  it('pops a node', () => {
    expect(singlyLinkedList.pop().val).toBe('are')
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.tail.val).toBe('how')
  })

  it('shifts a node', () => {
    expect(singlyLinkedList.shift().val).toBe('Hi')
    expect(singlyLinkedList.shift().val).toBe('there')
    expect(singlyLinkedList.shift().val).toBe('how')
    expect(singlyLinkedList.length).toBe(0)
  })

  it('unshifts a node', () => {
    expect(singlyLinkedList.unshift('Yo').length).toBe(1)
    expect(singlyLinkedList.unshift('Hey').length).toBe(2)
  })

  it('gets a node', () => {
    expect(singlyLinkedList.push('how').length).toBe(3)
    // Hey Yo how
    expect(singlyLinkedList.get(3)).toBe(null)
    expect(singlyLinkedList.get(-1)).toBe(null)
    expect(singlyLinkedList.get(0).val).toBe('Hey')
    expect(singlyLinkedList.get(1).val).toBe('Yo')
    expect(singlyLinkedList.get(2).val).toBe('how')
  })

  it('sets a node', () => {
    expect(singlyLinkedList.set(10, 'wow')).toBe(false)
    expect(singlyLinkedList.set(1, 'man')).toBe(true)
    expect(singlyLinkedList.get(1).val).toBe('man')
    // Hey Yo how
  })

  it('sets a node', () => {
    expect(singlyLinkedList.set(10, 'wow')).toBe(false)
    expect(singlyLinkedList.set(1, 'man')).toBe(true)
    expect(singlyLinkedList.get(1).val).toBe('man')
    // Hey man how
  })

  it('inserts a node', () => {
    expect(singlyLinkedList.insert(-1, 0)).toBe(false)
    expect(singlyLinkedList.insert(10, 0)).toBe(false)
    // Hey man how
    expect(singlyLinkedList.insert(3, 'are')).toBe(true)
    // Hey man how are
    expect(singlyLinkedList.insert(2, '!')).toBe(true)
    expect(singlyLinkedList.insert(0, 'Yo')).toBe(true)
    // Yo Hey man ! how are
  })

  it('remove a node', () => {
    singlyLinkedList.remove(0)
    // Hey man ! how are
    expect(singlyLinkedList.head.val).toBe('Hey')
    singlyLinkedList.remove(4)
    // Hey man ! how
    expect(singlyLinkedList.tail.val).toBe('how')
    expect(singlyLinkedList.remove(1).val).toBe('man')
    expect(singlyLinkedList.length).toBe(3)
    // Hey ! how
  })

  it('reverse the list', () => {
    singlyLinkedList.reverse()
    // how ! Hey
    singlyLinkedList.print()
    console.log(singlyLinkedList)
    expect(singlyLinkedList.head.val).toBe('how')
    expect(singlyLinkedList.tail.val).toBe('Hey')
  })
})
