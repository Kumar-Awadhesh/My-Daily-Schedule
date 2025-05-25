document.getElementById("task-btn").addEventListener("click", () => {
    const task = document.getElementById("input");
    const taskValue = task.value;

    if(taskValue === ""){
        alert("Task input can not be empty!");
        return;
    }
    
    const alltask = {
        task: taskValue
    }
    task.value = "";
    let taskArr = []

    let getTask = localStorage.getItem("allTask");
    if(getTask){
        const tasks = JSON.parse(getTask);
        taskArr = tasks;
    }
    taskArr = [];
    taskArr.push(alltask)
    localStorage.setItem("allTask", JSON.stringify(taskArr))

    const taskList = document.getElementById("tasks");
    const newTask = localStorage.getItem("allTask");
    if(newTask !== null){
        const arrtask = JSON.parse(newTask)
        arrtask.forEach(ele => {
            let addTask = document.createElement("h3")
            addTask.textContent = ele.task
            taskList.append(addTask);
        });
    }
    else{
        alert("Task input can not be empty!");
        return;
    }
})