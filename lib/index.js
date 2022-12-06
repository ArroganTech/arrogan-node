'use strict';
var Arrogan = require('./rest/Arrogan')
var initializer = function (username, password) {
    return new Arrogan(username, password);
};
initializer.Arrogan = Arrogan;

module.exports = initializer;
