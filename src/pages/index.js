
import {useTask} from '../context/taskContext'
import Layout from '../components/Layout'
export default function Home() {
  const {tasks} = useTask()
  console.log(tasks)
  return (
    <Layout >
    <h1>Hello World!</h1>
    </Layout>
  )
}
