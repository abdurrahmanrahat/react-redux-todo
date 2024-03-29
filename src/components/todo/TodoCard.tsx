import { useRemoveTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import Edit from "../icon/Edit";
import Trash from "../icon/Trash";
import { Button } from "../ui/button";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();

  // update todo
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  // delete todo
  const [removeTodo, { data }] = useRemoveTodoMutation();

  console.log(data, isLoading);

  const toggleState = () => {
    const taskData = {
      title,
      description,
      isCompleted: !isCompleted,
      priority,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
    // dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        className="mr-3"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1">{title}</p>

      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-[10px] rounded-full 
          ${priority === "high" ? "bg-green-500" : ""}
          ${priority === "medium" ? "bg-yellow-500" : ""}
          ${priority === "low" ? "bg-red-500" : ""}
          `}
        ></div>
        <p>{priority}</p>
      </div>

      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500 font-medium">Done</p>
        ) : (
          <p className="text-red-500 font-medium">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button onClick={() => removeTodo(_id)} className="bg-red-500">
          <Trash />
        </Button>
        <Button className="bg-[#5C53FE]">
          <Edit />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
