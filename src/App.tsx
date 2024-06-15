import React from 'react'

function App() {
  const [text, setText] = React.useState<string>('')
  const [todoList, setTodoList] = React.useState<string[]>([])

  // Add ToDo
  const addTodo = () => {
    setTodoList([...todoList, text])
    setText('')
  }

// Delete ToDo
  const deleteTodo = (index:number) => {
    const newList = [...todoList];
    newList.splice(index, 1); // Remove one element at 'index'
    setTodoList(newList);
  }

  // Edit ToDo
  const editTodo = (val:string) => {
    console.log('val', val)
    setText(val)

  }

  // Update ToDo
  const updateTodo = (index:number) => {
    const newList = [...todoList]
    newList[index] = text
    setTodoList(newList);
    setText('')

  }
  return (
    <>
      <div>
        <h1>Hello ToDo App</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {
            todoList && todoList.map((val, index) => {
              return (
                <>
                  <li>{val}</li>
                  <button style={{ cursor: 'pointer', backgroundColor: 'red' }} onClick={() => deleteTodo(index)}>Delete</button>
                  <button style={{ cursor: 'pointer', backgroundColor: 'yellow' }} onClick={() => editTodo(val)}>Edit</button>
                  <button style={{ cursor: 'pointer', backgroundColor: 'green' }} onClick={() => updateTodo(index)}>Update</button>

                </>
              )
            })
          }

        </ul>
      </div>
    </>
  );
}

export default App;
