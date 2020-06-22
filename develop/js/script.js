var list = JSON.parse(localStorage.getItem('todolist')) || [];

    function renderTodos(list) {
      $('#to-dos').empty();

      for (var i = 0; i < list.length; i++) {
        var toDoItem = $('<p>');
        toDoItem.text(list[i]);

        var toDoClose = $('<button>');
        toDoClose.attr('data-to-do', i);

        toDoClose.addClass('checkbox');

        toDoClose.text('check');

        toDoItem = toDoItem.prepend(toDoClose);

        $('#to-dos').append(toDoItem);
      }
    }

    $('#add-to-do').on('click', function (event) {
      event.preventDefault();

      var todoTask = $('#to-do')
        .val()
        .trim();

      list.push(todo);

      renderToDos(list);

      localStorage.setItem('todolist', JSON.stringify(list));

      $('#to-do').val('');
    });

    $(document).on('click', '.checkbox', function () {
      var toDoNumber = $(this).attr('data-to-do');
      list.splice(toDoNumber, 1);
      renderTodos(list);
      localStorage.setItem('todolist', JSON.stringify(list));
    });

    renderTodos(list);