import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { deleteProject, editProject, getALlProjects, saveProject } from "./controllers.js"

const typeDefs = `#graphql

    type ProjectTable {
        name: String
        currentGeneration: String
        totalGeneration: String
        PanelPower: String
        id: String
    }

    type Project {
        system_id:  String
        system_name:  String
        location:  String
        inverter_brand:  String
        panel_brand: String
        panel_power:  String
        panel_quantity:  String
        installed_power: String
        current_generation:  String
        total_generation:  String
    }

    type Delete {
        delete: String
    }

   
    type Query {
        allProjects: [ProjectTable]
    }

    type Mutation {
        
        saveProject(
            system_id:  String!
            system_name:  String!
            location:  String!
            inverter_brand:  String!
            panel_brand: String!
            panel_power:  String!
            panel_quantity:  String!
            installed_power: String!
            current_generation:  String!
            total_generation:  String!
        ): Project

        editProject(
            system_id:  String!
            system_name:  String!
            location:  String!
            inverter_brand:  String!
            panel_brand: String!
            panel_power:  String!
            panel_quantity:  String!
            installed_power: String!
            current_generation:  String!
            total_generation:  String!
        ): Project

        deleteProject(system_id: String!): Delete

    }



`;

const resolvers = {
    Query: {
        allProjects: async () => {
            try {
                const data = await getALlProjects()
                console.log(data)
                const projects = data?.map(project => {
                    return {
                        name: project?.system_name,
                        currentGeneration: project?.current_generation,
                        totalGeneration: project?.total_generation,
                        PanelPower: project?.panel_power,
                        id: project?.id
                    }
                })
                return projects
            } catch (error) {
                return []
            }
        },
    },
    Mutation: {
        saveProject: async (root, args) => {

            console.log('args -> ', args)

            const {
                system_id,
                system_name,
                location,
                inverter_brand,
                panel_brand,
                panel_power,
                panel_quantity,
                installed_power,
                current_generation,
                total_generation,
            } = args

            const project = await saveProject({
                system_id,
                system_name,
                location,
                inverter_brand,
                panel_brand,
                panel_power,
                panel_quantity,
                installed_power,
                current_generation,
                total_generation,
            })

            console.log('response supa -> ', project)

            return project[0]

        },
        editProject: async (root, args) => {

            console.log('args -> ', args)

            const {
                system_id,
                system_name,
                location,
                inverter_brand,
                panel_brand,
                panel_power,
                panel_quantity,
                installed_power,
                current_generation,
                total_generation,
            } = args

            const project = await editProject({
                system_id,
                system_name,
                location,
                inverter_brand,
                panel_brand,
                panel_power,
                panel_quantity,
                installed_power,
                current_generation,
                total_generation,
            })

            return project[0]

        },
        deleteProject: async (root, args) => {
            const { system_id } = args
            const response = await deleteProject(system_id)
            return response
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})


startStandaloneServer(server, {
    listen: { port: 4200 }
})
    .then(({ url }) => console.log('server on port', url))
    .catch(err => console.log('error on graph server', err?.message))