/**
 * @license MIT license (http://opensource.org/licenses/MIT)
 * @author Copyright (c) 2014 etg24 GmbH, http://etg24.de
 */

CKEDITOR.plugins.add('insertlinebreak', {

	lang: "de,en",
	icons: "break",
	hidpi: true,

	init: function(editor){

		(function(){
			var command = "break";

			editor.addCommand(command, {
				exec: function(editor) {
					editor.insertHtml('<br>');
				}
			});

			if (editor.ui.addButton) {
				editor.ui.addButton(command, {
					label: editor.lang.insertlinebreak.title,
					command: command,
					toolbar: "insert,100"
				});
			}
		})();

	}

});