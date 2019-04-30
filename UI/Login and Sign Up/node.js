class Node{
    constructor(data, next = null){
        this.data = data
        this.next =next
    }
}
 class Linkedlist {
     constructor(data, next = null){
         this.data = data
         this.head = null
}
 
 Insert(Val){
     this.head = new Node(Val, this.head)
}
}

//Now lets Insert data
const n = new Linkedlist()
n.Insert(5)
