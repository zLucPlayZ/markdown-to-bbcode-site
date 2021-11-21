const reader = new commonmark.Parser();
const writer = new markdown_to_bbcode.BBCodeRenderer();
const input = $('#markdown');
const output = $('#bbcode');
let timerId;

function render() {
	const parsed = reader.parse(input.val());
	output.val(writer.render(parsed));
}

input.on('keydown', function () {
	throttleFunction(render, 200);
});

throttleFunction = function (func, delay) {
	if (timerId) return;
	timerId = setTimeout(function () {
		func();
		timerId = undefined;
	}, delay);
}

render();
