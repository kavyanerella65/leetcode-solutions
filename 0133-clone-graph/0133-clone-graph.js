/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const map = new Map();

    function dfs(current) {
        if(map.has(current)) {
            return map.get(current);
        }

        let clone = new Node(current.val);
        map.set(current, clone);

        for(let neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    return dfs(node);
};
