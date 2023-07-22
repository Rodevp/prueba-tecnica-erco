import { supabase } from "./supabase.js"

export const getALlProjects = async () => {
    try {
        let { data, error } = await supabase
            .from('solar')
            .select('*')

        if (error) {
            return []
        }

        if (data) {
            return data
        }

    } catch (error) {
        console.log('error on query supabase')
    }
}

export const saveProject = async (project) => {

   console.log('project param -> ', project) 

    try {
        const { data, error } = await supabase
            .from('solar')
            .insert([{...project}])
            .select()

        if (data) {
            return data
        }

        if (error) {
            console.log('error -> ', error?.message)
            return {}
        }
    } catch (error) {
        console.log('error -> ', error?.message)
        return {}
    }
}