import { useEffect, useState } from "react"
import Project from "./Project"

type Project = {
    name? : string
    currentGeneration? : string
    PanelPower? : string
    totalGeneration? : string
}

function TableProjects() {

    const [data, setData] = useState<Array<Project>>([])

    useEffect(() => {

        const QUERY = {
            query: `
            query {
                allProjects {
                  name
                  currentGeneration
                  PanelPower
                  totalGeneration
                }
              }
            
            `
        }

        fetch('http://localhost:4200/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(QUERY)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data?.data?.allProjects)
            })
            .catch(err => console.log(err?.message))

    }, [])

    return (
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
                            data?.map(project => (
                             <Project
                                PanelPower={project.PanelPower}
                                currentGeneration={project.currentGeneration}
                                name={project.name}
                                totalGeneration={project.totalGeneration}
                             />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TableProjects