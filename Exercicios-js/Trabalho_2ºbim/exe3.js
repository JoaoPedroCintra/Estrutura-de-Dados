//Lista Encadeada
function linkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element),current;
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
    }

    this.size = function (){
        return length;
    };

    this.toString = function(){
        let current = head, string = " "
        while(current){                     
            string += current.element + (current.next ? "->" : "")     
//                                    condição ? Verdadeiro : Falso
            current = current.next
        }
        return string
    }
}

lista = new linkedList();
lista.append(10);
lista.append(12);
lista.append(5);
console.log(lista.size());
console.log(lista.toString())