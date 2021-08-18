<script context="module">
    let tasks = [
        {'id': 1, 'title': 'test1', 'done': false},
        {'id': 2, 'title': 'test2', 'done': false}
    ];

    function addTask() {
        let newId = tasks[tasks.length - 1].id + 1;
		tasks = [...tasks, {id: newId, title: 'test3', done: false}];
    }

    function deleteTask(event) {
        tasks = tasks.filter(task => task.id !== event.detail.id);
    }
</script>