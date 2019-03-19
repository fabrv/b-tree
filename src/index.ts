import { BPlusTree } from './B-tree'
import { LinkedList } from './LinkedList'
import axios from 'axios'

let tree = new BPlusTree<number, string>(3)
//let list = new LinkedList<string>('')
const url: string = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt'
axios.get(url).then(res =>{
  const data: Array<string> = res.data.toString().split("\r\n")
  let startTime = new Date()
  for (let i = 0; i < data.length; i++){
    tree.add(i, data[i])
  }
  let endTime = new Date()
  let diff = Math.abs(startTime.valueOf() - endTime.valueOf())
  console.log(`Binary insert: ${diff}ms`)

  startTime = new Date()
  let list = []
  for (let i = 0; i < data.length; i++){
    list.push(data[i])
  }
  endTime = new Date()
  diff = Math.abs(startTime.valueOf() - endTime.valueOf())
  console.log(`List insert: ${diff}ms`)
})