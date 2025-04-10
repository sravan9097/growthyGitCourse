function taskScheduler(tasks) {
    function runTask(index) {
      if (index < tasks.length) {
        tasks[index](() => runTask(index + 1));
      }
    }
    runTask(0);
  }
  

  const task1 = (callback) => {
    setTimeout(() => {
      console.log('Task 1 completed');
      callback();
    }, 1000);
  };
  

  const task2 = (callback) => {
    setTimeout(() => {
      console.log('Task 2 completed');
      callback();
    }, 500);
  };
  
  
  const task3 = (callback) => {
    setTimeout(() => {
      console.log('Task 3 completed');
      callback();
    }, 1500);
  };
  
  // Execute tasks sequentially
  taskScheduler([task1, task2, task3]);
  