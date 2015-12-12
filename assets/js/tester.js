var currentCode = '';

$(document).ready(function() {
  $('#testerButton').click(function() {
    openTesterWindow();
  });

  $('#testerWindow a#minimize').click(function() {
    closeTesterWindow();
  });

  $('#testerWindow #runButton').click(function() {
    var code = $('#testerWindow textarea').val();
    setTesterWindowOutput('');

    // Set current executor to redirect the output of print correctly (a bit hacky)
    currentExecutor = $('#testerWindow');

    try {
      L.execute(code);
    }
    catch (e) {
      setTesterWindowOutput(e.toString());
    }
  });

  $('#testerWindow #resetButton').click(function() {
    $('#testerWindow textarea').val(currentCode);
  });
});

function openTesterWindow(code) {
  currentCode = code;
  setTesterWindowOutput('');

  $('#testerButton').fadeOut(function() {
    $('#testerWindow textarea').val(code || '');
    $('#testerWindow').fadeIn();
  });
}

function closeTesterWindow() {
  $('#testerWindow').fadeOut(function() {
    $('#testerButton').fadeIn();
  })
}

function setTesterWindowOutput(output) {
  $('#testerWindow pre').html(output);
}
