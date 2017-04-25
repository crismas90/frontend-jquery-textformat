'use strict';
let textArea = $(".message-field");
let output = $(".message-formatted");
function getFormat(value) {
    return value.toLowerCase()
                .trim()
                .replace(/\s+/g, ' ');
}
textArea.on("input", function () {
    let value = textArea.val();
    let textFormat = getFormat(value);
    output.text(textFormat);
});