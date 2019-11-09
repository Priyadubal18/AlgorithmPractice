/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let ans;
var lowestCommonAncestor = function (root, p, q) {
    // recursive approach
    //input tress
    // output is a node   

    lca(root, p, q);
    return ans;

};


var lca = function (root, p, q) {
    //check the base case 
    if (root == null) {
        return false;
    }
    let left = lca(root.left, p, q) ? 1 : 0;
    let right = lca(root.right, p, q) ? 1 : 0;
    let mid = root == p || root == q ? 1 : 0;

    if (left + right + mid >= 2) {
        ans = root;
    }
    return (left + right + mid > 0);
}