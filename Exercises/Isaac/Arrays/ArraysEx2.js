/****

timestamp: 1472836852000

****/

function isInLine(coordinates) {
    order(coordinates);
    var maxDistance = calcDistance(coordinates[0], coordinates[coordinates.length - 1]);
    var totalDistance = 0;
    for (var i = 0; i < coordinates.length - 1; i++) {
        totalDistance += calcDistance(coordinates[i], coordinates[i + 1]);
    }
    return maxDistance === totalDistance;

    // Helper functions
    //==================================================
    function calcDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    }

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