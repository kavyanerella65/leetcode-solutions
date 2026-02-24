/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) return null;

    let dummy = new ListNode(-1);
    let current = dummy;

    let heap = [];

    const push = (node) => {
        if(node === null) return;
        heap.push(node);
        heap.sort((a, b) => a.val - b.val);
    };

    const pop = () => heap.shift();

    for(let list of lists) {
        if(list !== null) {
            push(list);
        }
    }

    while(heap.length > 0) {
        let smallest = pop();
        current.next = smallest;
        current = current.next;

        if(smallest !== null && smallest.next !== null) {
            push(smallest.next);
        }
    }
    return dummy.next;
};