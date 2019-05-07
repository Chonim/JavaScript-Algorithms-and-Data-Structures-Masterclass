// piece of data - val
// reference to next node - next

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push (val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
  pop () {
    if (!this.length) {
      return undefined
    }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (!this.length) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift () {
    if (!this.head) {
      return undefined
    }
    const currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (!this.length) {
      this.head = null
      this.tail = null
    }
    return currentHead
  }
  unshift (val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }
  get (index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let count = 0
    let currentNode = this.head
    while (count < index) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }
  set (index, val) {
    const node = this.get(index)
    if (!node) {
      return false
    }
    node.val = val
    return true
  }
  insert (index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      return !!this.push(val)
    }
    if (index === 0) {
      return !!this.unshift(val)
    }
    const node = new Node(val)
    const prevNode = this.get(index - 1)
    const temp = prevNode.next
    prevNode.next = node
    node.next = temp
    this.length++
    return true
  }
  remove (index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index === 0) {
      return this.shift()
    }
    const prevNode = this.get(index - 1)
    const nodeToRemove = prevNode.next
    prevNode.next = nodeToRemove.next
    this.length--
    return nodeToRemove
  }
  reverse () {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print () {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

module.exports = SinglyLinkedList
