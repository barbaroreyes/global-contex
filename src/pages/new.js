import Layout from '../components/Layout'
import {useState} from 'react'
import {useTask} from '../context/taskContext'
const TaskFormPage = () => {
    const [task ,setTask]= useState({
        title:'',
        dec:'',

    })
    const {createTask} =useTask()

    const handleChange = (e)=>{
        const {name , value} = e.target
       setTask({...task ,[name]:value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
     createTask(task)
    }
  return (
    <Layout>
 <form onSubmit={handleSubmit}>
 <h1>Add a Task</h1>
      <input type="text"
      name='title'
      placeholder="write a title" 
      className="bg-gray-800 
      focus:text-gray-100 
      focus:outline-none
      w-full
      py-3 px-4 mb-5
      "
      onChange={handleChange}
     />
      <textarea rows='2' placeholder="write a description" className="bg-gray-800 
      focus:text-gray-100 
      focus:outline-none
      w-full
      py-3 px-4 mb-5"
      name='dec'
      onChange={handleChange}></textarea>
      <button className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded-sm disabled:opacity-30 "
       disabled ={!task.title}>Save</button>
 </form>

    </Layout>
  );
}

export default TaskFormPage;
