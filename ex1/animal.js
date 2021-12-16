var Animal = /** @class */ (function () {
    function Animal(name) {
        this.setName(name);
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
