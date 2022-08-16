import { Button } from 'components/Button';
import useTasks from 'hooks/useTasks';

const Notes = () => {
  const {
    tasks,
    task,
    setTask,
    removeTask,
    addTask,
    toggleTask,
    editTask,
    titleRef,
    isEdit,
  } = useTasks();

  return (
    <div className="container flex mx-auto mt-10">
      <div className="min-h-screen basis-1/4">
        <h3 className="text-white font-black text-xl">Agregar Tareas</h3>
        <form onSubmit={addTask}>
          <div className="my-5">
            <label htmlFor="title" className="text-white font-bold">
              Titulo
              <input
                ref={titleRef}
                type="title"
                tabIndex={0}
                id="tarea"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-700"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
              />
            </label>
          </div>
          <div className="my-5">
            <label htmlFor="description" className="text-white font-bold">
              Descripción
              <textarea
                tabIndex={0}
                id="description"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-700"
                value={task.description}
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
                required
              />
            </label>
          </div>
          <Button>{isEdit ? 'Editar' : 'Agregar'} </Button>
        </form>
      </div>
      <div className="grow ">
        <h3 className="text-white font-black text-3xl text-center">
          Listado Tareas
        </h3>
        <div className="p-5 bg-darkbl mx-10 rounded-md mt-3">
          {tasks?.length > 0 ? (
            <ul className="flex flex-col first:mt-0">
              {tasks?.map(({ completed, description, id, title }) => (
                <>
                  <li
                    key={id}
                    className="flex w-full mt-2 bg-teal-50 px-5 py-2 rounded-md shadow-md border border-darkbl text-darkcl "
                  >
                    <div className="flex-1">
                      <h3
                        className={`font-black text-base ${
                          completed ? 'line-through' : ''
                        }`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`${
                          completed ? 'line-through' : ''
                        } font-semibold text-sm`}
                      >
                        {description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-2"
                        role="group"
                      >
                        <Button
                          type="success"
                          onClick={() => editTask(id + '')}
                          disable={completed}
                        >
                          Editar
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => toggleTask(id + '')}
                          disable={completed}
                        >
                          Completar
                        </Button>
                        <Button
                          type="danger"
                          onClick={() => removeTask(id + '')}
                          disable={completed}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          ) : (
            <p className="text-white font-semibold text-base text-center mt-5">
              No hay tareas. Intenta agregar una
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
