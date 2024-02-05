import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

type TTaskItem = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // fetchind todos to display.
  // const { todos } = useAppSelector((state) => state.todos);

  // data from server by RTK query
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-lg space-y-4 p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.map((item: TTaskItem) => (
            <TodoCard
              key={item._id}
              _id={item._id}
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
              priority={item.priority}
            />
          ))}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no Task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
