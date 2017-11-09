var state_succ = 200;
var state_failmsg = 201;
var state_sysmsg = 202;

exports.state_200 = state_succ;
exports.state_201 = state_failmsg;
exports.state_202 = state_sysmsg;

exports.responseResult = function (res, state, data) {
    var result = {
      state: state,
      data: data,
    }
    console.log(result);
    res.send(result);
};