test('clearCompletedTasks', () => {
    const ts = [
        {
            id: 123,
            text: 'активная',
            taskStatus: "active"
        },
        {
            id: 123,
            text: 'завершенная',
            taskStatus: "completed"
        }
]
    expect(setTaskStatus(ts)).toBe(2);
});

const setTaskStatus = (ts) => {
     test = ts.map(task => task.id === 123 ? {...task, taskStatus: "completed" ? "active" : false} : task)
    return test.filter(task => task.taskStatus == "active").length
}