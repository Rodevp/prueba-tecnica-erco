import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../querys"
import { useEffect } from "react"

interface Props {
    id: string
}

function Detail({ id }: Props) {

    const [getDetail, { data }] = useMutation(GET_PROJECT)

    useEffect(() => {
        getDetail({ variables: { getProjectId: id } })
    }, [])

    if(data) {
        console.log(data)
    }

  return (
    <div>Detail</div>
  )
}

export default Detail
