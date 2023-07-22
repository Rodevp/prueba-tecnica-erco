import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { deleteProject, editProject, getALlProjects, saveProject } from "./controllers.js"
import { supabase } from "./supabase.js";

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

        deleteProject(id: String!): Delete
        getProject(id: String!): Project

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

            return project[0]

        },
        editProject: async (root, args) => {

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
            const { id } = args
            const response = await deleteProject(id)
            return response
        },
        getProject: async (root, args) => {
            const { id } = args
            let { data, error } = await supabase
                .from('solar')
                .select('*')
                .eq('id', id)

                console.log("data -> ", data)

            return {
                system_id:  data[0]?.system_id,
                system_name:  data[0]?.system_name,
                location:  data[0]?.location,
                inverter_brand:  data[0]?.inverter_brand,
                panel_brand: data[0]?.panel_brand,
                panel_power:  data[0]?.panel_power,
                panel_quantity:  data[0]?.panel_quantity,
                installed_power: data[0]?.installed_power,
                current_generation:  data[0]?.current_generation,
                total_generation:  data[0]?.total_generation
            }
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