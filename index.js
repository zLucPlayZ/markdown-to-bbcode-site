function render() {
	var reader = new commonmark.Parser();
	var writer = new markdown_to_bbcode.BBCodeRenderer();
	var parsed = reader.parse(document.getElementById("markdown").value);
	var result = writer.render(parsed);
	document.getElementById("bbcode").textContent = result;
}
