class LinkedList{
    constructor(){
        this.head = null
    }

    insertFirst(item){
        this.head = new _Node(item, this.head) //why is this.head passed as the second param
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item)
        }
        else{
            let tempNode = this.head
            while(tempNode.next !== null){
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null);
        }
    }


    insertBefore(insertItem, target) { 
        if (!this.head || this.head.value === target) { 
            this.insertFirst(insertItem); 
            return; 
        }

        let currNode = this.head
        let prevNode = this.head

        while(currNode.value !== target){
            console.log(currNode.next)
            prevNode = currNode
            currNode = currNode.next
        }

        console.log('prev: ', prevNode)
        console.log('curr: ', currNode)

        prevNode.next = new _Node(insertItem, currNode)
    }

    insertAfter(insertItem, target){
        if (!this.head || this.head.value === target) { 
            this.insertLast(insertItem); 
            return; 
        }

        let currNode = this.findItem(target)
        currNode.next = new _Node(insertItem, currNode.next)

    }

    findItem(item){
        let currNode = this.head

        if(!this.head){
            return null
        }
        while(currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        return currNode
    }

    deleteItem(item){
        if(!this.head){
            return null
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head
        let prevNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        prevNode.next = currNode.next;
    }
}

class _Node{
    constructor(value, next){
        this.value = value,
        this.next = next
    }
}

function main(){
    const SLL = new LinkedList
    SLL.insertFirst('apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    // SLL.insertLast('Tauhida')
    // SLL.deleteItem('Husker')
    SLL.insertAfter('Bill', 'Helo')
    console.log(SLL)
}

main()