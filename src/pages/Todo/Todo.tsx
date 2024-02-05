import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container className="mb-10">
      <h2 className="text-center text-3xl md:text-5xl font-semibold my-10">
        My Todos
      </h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
