import {AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link';
import {useRouter} from  'next/router'
import {useTask} from '../context/taskContext'
const Layout = ({children}) => {
    const router = useRouter()
    const {tasks} = useTask()

  return (
    <div className = ' h-screen bg-gray-900 text-white'>
     <header className="bg-gray-800 text-white flex items-center px-20 py-5">
         <Link href='/'>
             <a>
             <h1 className="font-black text-lg">Task App</h1>
             </a>
         </Link>
      <span className="ml-2 text-grey-400 font-bold">{tasks.length} Taks</span>
      <div className="flex-grow text-right">
          <button className="bg-green-500 hover:bg-green-300 px-5 py-2 font-bold rouded-sm inline-flex items-center "
                 onClick= {() =>router.push("/new")}>
              <AiOutlinePlus className="mr-2"/>
              Add Task
              </button>
      </div>
     </header>
   
     <main className="px-28">
     {children}
     </main>
     
    </div>
  );
}

export default Layout;
