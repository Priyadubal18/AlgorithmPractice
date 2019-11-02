// https://leetcode.com/problems/kth-largest-element-in-an-array

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue < Integer > p =  new PriorityQueue<Integer>();
        for (int num : nums) {
            p.add(num);
            if (p.size() > k)
                p.poll();
        }
        return p.peek();
    }
}