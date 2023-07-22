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
}

function Project({PanelPower, currentGeneration, name, totalGeneration,id, showDetail}: Props) {

    //const [deleteProject, {data}] = useLazyQuery(DELETE_PROJECT)
    //console.log(data)

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            onClick={() => {
                showDetail({
                    id,
                    show: true
                })
            }}
        >
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
            <td className="px-6 py-4"
                onClick={() => {
                    //deleteProject({
                      //  variables: {
                        //    id
                        //}
                    //})
                }}
            >
                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</p>
            </td>
        </tr>
    )
}

export default Project