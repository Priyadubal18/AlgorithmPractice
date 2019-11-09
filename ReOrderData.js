
https://leetcode.com/problems/reorder-data-in-log-files/submissions/

function reorderLogFiles(logs) {
    //const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
    // const isNumber = c => /\d/.test(c);

    // if body same then compare identifier
    const compare = (a, b) => {
        const n = body(a).localeCompare(body(b));
        if (n !== 0) return n;
        return a.localeCompare(b);
    };

    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
        if (isNumber(body(log))) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    }
    return [...letterLogs.sort(compare), ...digitLogs];
}

/*
var reorderLogFiles = function(logs) {
    logs.sort(function(log1, log2) {     
        debugger;
        let split1 = log1.split(" ", 2);
        let split2 = log2.split(" ", 2);
        let digit1 = isNumber(split1[1][0]);
        let digit2 = isNumber(split2[1][0]);
        if(!digit1 && !digit2){
            let cmp = split1[1].localeCompare(split2[1]);
            if(cmp != 0) return cmp
            return body(log1).localeCompare(body(log2))
        }
        return digit1 ? (digit2 ? 0 : 1) : -1
    })
    return logs;
};
*/

function isNumber(c) {
    /* if(char >= 0 || char <= 9){
         return true;
     }
    return false;*/
    //return parseInt(c) >= 0  ? true :false
    return /\d/.test(c)
}

function body(data) {
    return data.slice(data.indexOf(" ") + 1)
}

["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]