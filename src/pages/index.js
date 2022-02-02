
import {useTask} from '../context/taskContext'

export default function Home() {
  const {hello,great} = useTask()
  console.log(hello)
  console.log(great("pepe"))

  return (
    <div >
      Hom:{hello}
    </div>
  )
}
