$(document).ready(function() {
    $("#tarefaForm").submit(function(e) {
      e.preventDefault();
      const taskName = $("#tarefaNome").val();
      if (taskName) {
        $("#tarefaLista").append(`<li>${taskName}</li>`);
        $("#tarefaNome").val("");
      }
    });
  
    $("#tarefaLista").on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });
  