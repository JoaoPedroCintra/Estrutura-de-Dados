// Nomes: Heitor Ramos e João Pedro Cintra     3ºADS_M
//alocação Dinâmica de Memória

function linkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

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
    };

    this.size = function (){
        return length;
    };
    
    this.toString = function(){
        let current = head, string = " "
        while(current){                     
            string += current.element + (current.next ? "->" : "")     
            current = current.next
        }
        return string
    };

    this.removeHead = function (){
        if(head != null ){
            head = head.next;
            length--;
        }else{
            console.log("A lista não foi iniciada");
        }
       
    };

    this.addInitial = function(element) {
        let node = new Node(element);
        node.next = head; 
        head = node; 
        length++;
    };
    
    this.position = function(element) {
        let current = head;
        let pos = 0;

        while (current) {
            if (element === current.element) {
                return pos;
            }

            current = current.next;
            pos++;
        }

        return -1;
    };

    this.remove_position = function (position) {
        if (position < 0 || position >= length) {
          console.log("Posição inválida");
          return;
        }
      
        let current = head;
        let previous = null;
        let index = 0;
      
        if (position === 0) {
          head = current.next;
        } else {
          while (index < position) {
            previous = current;
            current = current.next;
            index++;
          }
      
          previous.next = current.next;
        }
      
        length--;
      };
      
}
        
lista = new linkedList();
lista.append(10);
lista.append(12);
lista.append(5);
lista.append(6);
lista.append(27);
lista.removeHead();
lista.addInitial(50)
lista.remove_position(2)
console.log(lista.position(27))
console.log(lista.size());
console.log(lista.toString());
