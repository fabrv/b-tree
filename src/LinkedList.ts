export class LinkedList<K>{
  value: K
  right: LinkedList<K> = null

  constructor(value: K){
    this.value = value
  }

  add(value: K, me: LinkedList<K> = this){
    const element = new LinkedList<K>(value)
    if (me.right == null){
      me.right = element
    }else{
      this.add(value, me.right)
    }
  }
}