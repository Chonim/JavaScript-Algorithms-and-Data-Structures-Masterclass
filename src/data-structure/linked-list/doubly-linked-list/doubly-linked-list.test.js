const DoublyLinkedList = require('./doubly-linked-list')

const doublyLinkedList = new DoublyLinkedList()

describe('Linked List', () => {
  it('pushes a node', () => {
    expect(doublyLinkedList.push(12).length).toBe(1)
    expect(doublyLinkedList.push(13).length).toBe(2)
    expect(doublyLinkedList.head.val).toBe(12)
    expect(doublyLinkedList.head.prev).toBe(null)
    expect(doublyLinkedList.head.next.val).toBe(13)
    expect(doublyLinkedList.tail.val).toBe(13)
    expect(doublyLinkedList.tail.prev.val).toBe(12)
    expect(doublyLinkedList.tail.next).toBe(null)
    // 12 13
  })

  it('pops a node', () => {
    doublyLinkedList.push(99)
    // 12 13 99
    expect(doublyLinkedList.pop().val).toBe(99)
    // 12 13
    expect(doublyLinkedList.length).toBe(2)
    expect(doublyLinkedList.tail.val).toBe(13)
  })

  it('shifts a node', () => {
    doublyLinkedList.push(100)
    // 12 13 100
    expect(doublyLinkedList.shift().val).toBe(12)
    expect(doublyLinkedList.shift().val).toBe(13)
    expect(doublyLinkedList.shift().val).toBe(100)
    expect(doublyLinkedList.shift()).toBe(undefined)
    expect(doublyLinkedList.length).toBe(0)
  })

  it('unshifts a node', () => {
    doublyLinkedList.push(200)
    doublyLinkedList.push(500)
    expect(doublyLinkedList.length).toBe(2)
    expect(doublyLinkedList.unshift(10).length).toBe(3)
    expect(doublyLinkedList.head.val).toBe(10)
    expect(doublyLinkedList.tail.val).toBe(500)
    // 10 200 500
    doublyLinkedList.push(99)
    doublyLinkedList.push(120)
  })

  it('gets a node', () => {
    // 10 200 500 99 120
    expect(doublyLinkedList.get(-1)).toBe(null)
    expect(doublyLinkedList.get(0).val).toBe(10)
    expect(doublyLinkedList.get(1).val).toBe(200)
    expect(doublyLinkedList.get(2).val).toBe(500)
    expect(doublyLinkedList.get(3).val).toBe(99)
    expect(doublyLinkedList.get(4).val).toBe(120)
  })

  it('sets a node', () => {
    // 10 200 500 99 120
    expect(doublyLinkedList.set(-1, 30)).toBe(false)
    expect(doublyLinkedList.set(1, 30)).toBe(true)
    expect(doublyLinkedList.get(1).val).toBe(30)
    // 10 30 500 99 120
  })

  it('inserts a node', () => {
    expect(doublyLinkedList.insert(-1, 100)).toBe(false)
    expect(doublyLinkedList.insert(3, 100)).toBe(true)
    // 10 30 500 100 99 120
    const insertedNode = doublyLinkedList.get(3)
    expect(doublyLinkedList.get(2).val).toBe(500)
    expect(insertedNode.prev.val).toBe(500)
    expect(insertedNode.val).toBe(100)
    expect(insertedNode.next.val).toBe(99)
    expect(doublyLinkedList.get(4).val).toBe(99)
    expect(doublyLinkedList.length).toBe(6)

    doublyLinkedList.insert(0, 300)
    // 300 10 30 500 100 99 120
    expect(doublyLinkedList.head.val).toBe(300)

    doublyLinkedList.insert(7, 900)
    // 300 10 30 500 100 99 120 900
    expect(doublyLinkedList.tail.val).toBe(900)

    expect(doublyLinkedList.length).toBe(8)
  })

  it('removes a node', () => {
    expect(doublyLinkedList.remove(-1)).toBe(undefined)
    expect(doublyLinkedList.remove(100)).toBe(undefined)
    // 300 10 30 500 100 99 120 900
    expect(doublyLinkedList.remove(3).val).toBe(500)
    expect(doublyLinkedList.remove(3).val).toBe(100)
    // 300 10 30 99 120 900
    expect(doublyLinkedList.length).toBe(6)
    expect(doublyLinkedList.get(3).val).toBe(99)
    expect(doublyLinkedList.get(3).prev.val).toBe(30)
    expect(doublyLinkedList.get(3).next.val).toBe(120)
  })
})
