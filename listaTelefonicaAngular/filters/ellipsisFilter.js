angular.module("listaTelefonica").filter("ellipsis", function() {
    return function(input, size) {
        var output = input.substring(0, size || 5) + "...";
        if (input.length < size)
            return input;
        return output;
    };
});