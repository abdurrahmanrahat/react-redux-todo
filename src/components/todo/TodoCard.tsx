import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import Edit from "../icon/Edit";
import Trash from "../icon/Trash";
import { Button } from "../ui/button";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        className="mr-3"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
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
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
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
