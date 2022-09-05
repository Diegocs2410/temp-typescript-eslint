import { FormEvent, useEffect, useRef, useState } from 'react';
import { TaskType } from '../utils/types';
import Swal from 'sweetalert2';
import { intitalTask } from 'utils/mocks/initialStates';

const useTasks = () => {
  // Check if task already exists in localStorage
  const localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState<TaskType[]>(localTasks as TaskType[]);
  const [task, setTask] = useState<TaskType>({} as TaskType);
  const [isEdit, setIsEdit] = useState(false);
  // Ref
  const titleRef = useRef(undefined as unknown as HTMLInputElement);

  const removeTask = (id: string) => {
    Swal.fire({
      title: '¿Seguro de esto?',
      text: 'Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    })
      .then((_result): void => {
        if (_result.value) {
          setTasks(tasks.filter((t) => t.id !== id));
          Swal.fire('Eliminado!', 'Tu tarea ha sido eliminada.', 'success');
        }
      })
      .catch(() => {
        Swal.fire('Cancelado', 'Tu tarea es esta segura :)', 'error');
      });
  };

  function updateTask(): void {
    tasks.forEach((item: TaskType) => {
      if (item.id === task.id) {
        item.title = titleRef.current.value;
        item.description = task.description;
      }
    });
    setTasks([...tasks]);
    setIsEdit(false);
    setTask(intitalTask);
    titleRef.current.focus();
  }

  function createTask() {
    const newTask = {
      id: (Date.now() + Math.random() * 1000).toFixed(0),
      title: task.title,
      description: task.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask(intitalTask);
    titleRef.current.focus();
  }

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isEdit ? updateTask() : createTask();
  };

  const toggleTask = (id: string) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const editTask = (id: string) => {
    setTask(tasks.find((t) => t.id === id) || intitalTask);
    setIsEdit(true);
    titleRef.current.focus();
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks) || '[]');
  }, [tasks]);

  return {
    tasks,
    setTasks,
    task,
    setTask,
    removeTask,
    addTask,
    toggleTask,
    editTask,
    titleRef,
    isEdit,
  };
};

export default useTasks;
