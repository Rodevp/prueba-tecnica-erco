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

export const editProject = async (project) => {

     try {
         const { data, error } = await supabase
             .from('solar')
             .update({...project})
             .eq('system_id', project?.system_id)
             .select()

        console.log('data supa -> ', data)
 
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

export const deleteProject = async (id) => {

    try {
        const { data, error } = await supabase
            .from('solar')
            .delete()
            .eq('id', id)

       console.log('data supa -> ', data)

        if (data == null) {
            return {
                delete: "ok"
            }
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