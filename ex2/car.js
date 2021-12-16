var Car = /** @class */ (function () {
    function Car(gasAmount) {
        this.gasAmount = gasAmount;
    }
    Car.prototype.drive = function () {
        if (this.gasAmount > 0) {
            alert("The car is driving!");
        }
    };
    Car.prototype.refuel = function (gasAmount) {
        this.gasAmount += gasAmount;
        return true;
    };
    return Car;
}());
