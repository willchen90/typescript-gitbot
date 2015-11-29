var Error = (function () {
    function Error() {
    }
    Error.doNotUnderstand = function () {
        return "sorry, I do not understand your question";
    };
    return Error;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Error;
//# sourceMappingURL=error.js.map