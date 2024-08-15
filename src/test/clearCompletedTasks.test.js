test('clearCompletedTasks', () => {
    const initialTasks = [
        { id: '1', text: '123', taskStatus: 'active' },
        { id: '12', text: '456', taskStatus: 'completed' },
        { id: '13', text: '789', taskStatus: 'active' }
    ];
    expect(clearCompletedTasks(initialTasks)).toBe(2);
});

function clearCompletedTasks(tasks) {
    return tasks.filter(task => task.taskStatus !== 'completed').length;
  }


