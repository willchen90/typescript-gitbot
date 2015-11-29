var _ = require("lodash");
var Query = (function () {
    function Query(queryString) {
        this.queryString = queryString;
    }
    Query.prototype.startsWith = function (keyword) {
        var _this = this;
        if (typeof keyword === "string") {
            return this.startsWithSingular(keyword);
        }
        else {
            var results = _.map(keyword, function (value) {
                return _this.startsWithSingular(value);
            });
            return _.every(results);
        }
    };
    Query.prototype.startsWithSingular = function (keyword) {
        var regex = new RegExp("^" + keyword);
        return regex.test(this.queryString);
    };
    Query.prototype.includes = function (keyword) {
        var _this = this;
        if (typeof keyword === "string") {
            return this.includesSingular(keyword);
        }
        else {
            var results = _.map(keyword, function (value) {
                return _this.includesSingular(value);
            });
            return _.every(results);
        }
    };
    Query.prototype.includesSingular = function (keyword) {
        var regex = new RegExp(keyword);
        return regex.test(this.queryString);
    };
    return Query;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Query;
//# sourceMappingURL=query.js.map