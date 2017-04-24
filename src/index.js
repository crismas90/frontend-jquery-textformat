'use strict';
let textArea = $(".message-field");
let output = $(".message-formatted");
textArea.on("input", function () {
    let value = textArea.val();
    function textFormatting() {
        return value.toLowerCase().trim().replace(/\s+/g, ' ');
    }
    output.text(textFormatting(value));
});