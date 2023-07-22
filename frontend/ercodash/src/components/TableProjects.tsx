import Project from "./Project"
import { useQuery } from "@apollo/client"
import { GET_ALL_PROJECT_TABLE } from "../querys"
import Loading from "./Loading"
import Detail from "./Detail"
import { useState } from "react"
import EditProject from "./EditProject"

type Project = {
    name?: string
    currentGeneration?: string
    PanelPower?: string
    totalGeneration?: string
    id: string
}

function TableProjects() {

    const { data, loading, refetch } = useQuery(GET_ALL_PROJECT_TABLE)
    const [showDetail, setShowDetail] = useState({
        show: false,
        id: ""
    })
    const [showEdit, setShowEdit] = useState({
        show: false,
        id: ""
    })

    return (
        <>
            {
                showDetail.show !== true && showEdit.show !== true && (
                    <div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Generacion Actual
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Generacion total
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Potencia instalada
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading
                                            ? <Loading />
                                            : data?.allProjects.map((project: Project) => (
                                                <Project
                                                    id={project.id}
                                                    key={project.id}
                                                    PanelPower={project.PanelPower}
                                                    currentGeneration={project.currentGeneration}
                                                    name={project.name}
                                                    totalGeneration={project.totalGeneration}
                                                    showDetail={setShowDetail}
                                                    showEdit={setShowEdit}
                                                    refetch={refetch}
                                                />
                                            ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
            {
                showDetail.show && <Detail id={showDetail.id} showDetail={setShowDetail} />
            }
            {
                showEdit.show && <EditProject showEdit={setShowEdit} id={showEdit.id} />
            }
        </>
    )
}

export default TableProjects