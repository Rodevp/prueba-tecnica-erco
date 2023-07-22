import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../querys"

type Dispatch = React.Dispatch<React.SetStateAction<{
    id: string,
    show: boolean
}>>

interface Props {
    name?: string
    currentGeneration?: string
    totalGeneration?: string
    PanelPower?: string
    id: string
    showDetail: Dispatch
    refetch: any
}

function Project({PanelPower, currentGeneration, name, totalGeneration,id, showDetail, refetch}: Props) {

    const [deleteProject, { }] = useMutation(DELETE_PROJECT)

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td className="px-6 py-4">
                {currentGeneration}
            </td>
            <td className="px-6 py-4">
                {totalGeneration}
            </td>
            <td className="px-6 py-4">
                {PanelPower}
            </td>
            <td className="px-6 py-4">
                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</p>
            </td>
            <td className="px-6 py-4 cursor-pointer"
                 onClick={() => {
                    showDetail({
                        id,
                        show: true
                    })
                }}
            >
                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detalle</p>
            </td>
            <td className="px-6 py-4 cursor-pointer"
                onClick={() => {
                    deleteProject({
                      variables: {
                        deleteProjectId: id
                        }
                    })
                    refetch()
                }}
            >
                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Eliminar
                </p>
            </td>
        </tr>
    )
}

export default Project