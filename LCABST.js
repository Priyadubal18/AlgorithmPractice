https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var lowestCommonAncestor = function (root, p, q) {

    if (root == null || p == null || q == null) {
        return root;
    }

    let parentVl = root.val;
    let pval = p.val;
    let qval = q.val;

    if (pval > parentVl && qval > parentVl) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else if (pval < parentVl && qval < parentVl) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }


};