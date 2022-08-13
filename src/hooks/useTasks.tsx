import { useState } from 'react';
import { TaskType } from '../utils/types';

const useTasks = () => {
  // Check if task already exists in localStorage
  const [tasks, setTasks] = useState<TaskType[]>([] as TaskType[]);
  const [task, setTask] = useState<TaskType>({} as TaskType);
  return {
    tasks,
    setTasks,
    task,
    setTask,
  };
};

export default useTasks;
