import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../querys"
import { useEffect } from "react"
import Loading from "./Loading"

type Dispatch = React.Dispatch<React.SetStateAction<{
  id: string,
  show: boolean
}>>

interface Props {
  id: string
  showDetail: Dispatch
}

function Detail({ id, showDetail }: Props) {

  const [getDetail, { data, loading }] = useMutation(GET_PROJECT)

  useEffect(() => {
    getDetail({ variables: { getProjectId: id } })
  }, [])

  if (data) {
    console.log(data)
  }

  return (
    <div>

      {

        loading
          ? <Loading />
          : (
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.getProject?.system_name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">system id: {data?.getProject?.system_id}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">installed power: {data?.getProject?.installed_power}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">installed brand: {data?.getProject?.installed_brand}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">current generation: {data?.getProject?.current_generation}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">total generation: {data?.getProject?.total_generation}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">location: {data?.getProject?.location}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">panel brand: {data?.getProject?.panel_brand}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">panel power: {data?.getProject?.panel_power}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">panel quantity: {data?.getProject?.panel_quantity}</p>
              <p 
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                onClick={() => {
                  showDetail({
                    id: "",
                    show: false
                  })
                }}
              >
                Volver
              </p>
            </div>

          )

      }

    </div>
  )
}

export default Detail
