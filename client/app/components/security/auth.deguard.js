"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmDeactivateGuard = (function () {
    function ConfirmDeactivateGuard() {
    }
    ConfirmDeactivateGuard.prototype.canDeactivate = function (target) {
        if (target.hasChanges()) {
            return window.confirm('Do you really want to cancel?');
        }
        return true;
    };
    return ConfirmDeactivateGuard;
}());
exports.ConfirmDeactivateGuard = ConfirmDeactivateGuard;
//# sourceMappingURL=auth.deguard.js.map