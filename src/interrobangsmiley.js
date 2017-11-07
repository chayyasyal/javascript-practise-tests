"use strict";

(function(exports) {
  function interrobangsmiley(exclaim, question, smiley, string) {
    return smiley(exclaim(question(string)));
  };

  exports.interrobangsmiley = interrobangsmiley;
  console.log(interrobangsmiley);
})(this);
