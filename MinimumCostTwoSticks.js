/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
    let data = PriorityQueue();
    for (let i = 0; i < sticks.length; i++) {
        data.enqueue(sticks[i]);
    }

    let count = 0;
    while (data.size() > 1) {
        let x = data.poll();
        let y = data.poll();
        let sum = x + y;
        count += sum;
        data.enqueue(sum);
    }

    return count;
};

var PriorityQueue = function () {
    var obj = {};
    obj.items = [];

    obj.enqueue = function (ele) {
        let isadded = false;
        for (i = 0; i < this.items.length; i++) {
            if (this.items[i] > ele) {
                this.items.splice(i, 0, ele);
                isadded = true;
                break;
            }
        }
        if (!isadded)
            this.items.push(ele);
    }

    obj.poll = function () {
        return this.items.shift();
    }

    obj.peek = function () {
        return this.items[this.items.length - 1];
    }

    obj.size = function () {
        return this.items.length;
    }
    return obj;
}
connectSticks([1, 3, 5, 8])