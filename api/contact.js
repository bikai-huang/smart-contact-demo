var response  = require('../common/response');

/**
 * @api {get} /createContact/:createContact createContact
 * @apiGroup contact
 * @apiVersion 1.0.0
 * @apiDescription restful api demo
 *
 * @apiParam {String} createContact
 *
 * @apiSuccess {String} contact info.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "num": "A123",
 *       "content": 'this is demo',
 *     }
 *
 * @apiError error message.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "error message"
 *     }
 */
exports.createContact = function (req, res, next) {
    var errormsg = { 
        error: ''
    };

    var contact = {
        num: 'A123',
        content: 'this is demo.',
    };

    var createContact = req.query.createContact;
    if(createContact) {
        return response.responseResult(res, response.state_200, contact);
    } else {
        errormsg.error = 'create contact failed.';
        return response.responseResult(res, response.state_202, errormsg);
    }
};