/****

timestamp: 1472836814000

****/

function createCoords(n) {
    var coords = [];
    for (var i = 0; i < n; i++) {
        coords[i] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    }
    order(coords);
    return coords;

    // Helper functions
    //==================================================
    function swap(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }

    function order(array) {
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[j][0] < array[i][0]) {
                    swap(array, i, j);
                }
            }
        }
        return array;
    }
}