/**
 * Error responses
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
    var viewFilePath = '404';
    var statusCode = 404;
    var result = {
        status: statusCode
    };

    res.status(result.status);
    res.render(viewFilePath, function (err) {
        if (err) { return res.json(result, result.status); }

        res.render(viewFilePath);
    });
};


// see express section http://machadogj.com/2013/4/error-handling-in-nodejs.html
// see example code http://stackoverflow.com/questions/27275957/webstorm-9-autocompletion-node-js-module-jsdoc
