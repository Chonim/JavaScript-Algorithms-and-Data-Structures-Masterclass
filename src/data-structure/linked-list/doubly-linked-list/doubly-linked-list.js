class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop () {
    if (!this.head) {
      return undefined
    }
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift () {
    if (!this.length) {
      return undefined
    }
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift (val) {
    const newNode = new Node(val)
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get (index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    const half = Math.floor(this.length / 2)
    let current
    let count
    if (index <= half) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }
  set (index, val) {
    const node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }
  insert (index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return !!this.unshift(val)
    } else if (index === this.length) {
      return !!this.push(val)
    }
    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    const nextNode = prevNode.next

    newNode.next = nextNode
    nextNode.prev = newNode

    prevNode.next = newNode
    newNode.prev = prevNode

    this.length++
    return true
  }
  remove (index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) {
      return !!this.shift()
    } else if (index === this.length - 1) {
      return !!this.pop
    }
    const nodeToRemoved = this.get(index)
    nodeToRemoved.prev.next = nodeToRemoved.next
    nodeToRemoved.next.prev = nodeToRemoved.prev
    nodeToRemoved.prev = null
    nodeToRemoved.next = null
    this.length--
    return nodeToRemoved
  }
}

// const first = new Node(12)
// first.next = new Node(13)
// first.next.prev = first

// console.log(first)

module.exports = DoublyLinkedList
