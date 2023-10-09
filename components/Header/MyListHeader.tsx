import { ItemListInterface } from '@/common.types'
import BackButton from '../BackButtom'

const MyListHeader = ({ myListData }: { myListData: ItemListInterface }) => {
  return (
    <section className="talk_header">
      <BackButton backTo='/mylist'/>
      <div className="flex flex-row gap-5">
        <text className="text-sm self-center">
          {myListData.name}
        </text>
      </div>
    </section>
  )
}

export default MyListHeader