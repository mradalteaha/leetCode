
 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/* 
my idea is to have both indexes run in parallel
*/
var mergeTwoLists = function(list1, list2) {

/*     if(list1!=null && list2!=null){ // if  we haven't reach the limit on any of the lists 
    if(list1.val<list2.val){
        list1.next=mergeTwoLists(list1.next,list2);
        return list1;
    }
    else{
        list2.next=mergeTwoLists(list1,list2.next);
        return list2;
     }

    }
    if(list1==null){
        return list2;
    }else{
    return list1;
    } */

    while(list1!=null){
        console.log(list1.val)
        list1 = list1.next
    }
      
  
};

console.log(mergeTwoLists([1,3,4],[1,2,4]))