/****

timestamp: 1472808000000
skype

****/

function play(arr, firstElement, lastElement, insertElement) {
    var copy = arr.slice(0);
    copy.unshift(firstElement);
    copy.push(lastElement);
    copy.splice(insertElement[0], 0, insertElement[1]);
    return copy;
}