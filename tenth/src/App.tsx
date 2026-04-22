import useTodos from "./hooks/get-todos"

function App() {

  const { isLoading, data: todos, error, isError } = useTodos();

  if (isLoading) return <div>Loading ... </div>

  if (isError) return <div>{error.message}</div>

  return (
    <div className="flex flex-col justify-center items-center gap-24 mt-24">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="flex flex-col gap-4 w-108">
        {todos.map((item: { id: string, title: string }) => {
          return <div className="p-4 bg-zinc-800 rounded-xl" key={item.id}>{item.id}. {item.title}</div>
        })}
      </div>
    </div>
  );
}

export default App
