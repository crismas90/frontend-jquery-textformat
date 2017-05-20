'use strict';
let textArea = $(".message-field");
let output = $(".message-formatted");
function getFormattedText(value) {
    return value.toLowerCase()
                .trim()
                .replace(/\s+/g, ' ');
}
textArea.on("input", function () {
    let value = textArea.val();
    let textFormat = getFormattedText(value);
    output.text(textFormat);
});
