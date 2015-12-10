var currentExecutor = null;

// Define Lua functions
var Module = {
  print: function(output) {
    if (!currentExecutor) {
      console.log(output);
      return;
    }

    var outputPre = $(currentExecutor).find('pre.output');
    outputPre.html(outputPre.html() + output + '\n');
  }
};


// Add execute buttons (and its actions)
$(document).ready(function() {
  $('.executor').each(function(i, element) {
    var runButton = $(element).find('label').prepend('<span class="glyphicon glyphicon-play"></span>');

    runButton.click(function() {
      var input = $(element).find('pre');
      currentExecutor = element;

      if ($(currentExecutor).children('pre.output').length == 0) {
        $(currentExecutor).append('<pre class="output"></pre>');
      }
      var outputPre = $(currentExecutor).find('pre.output');
      outputPre.html('');

      try {
        L.execute(input.data('code'));
      }
      catch (e) {
        outputPre.html(e.toString());
      }
    });
  });
});
