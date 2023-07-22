import csv from "csvtojson"
import { supabase } from "./supabase.js"

const scriptDataSaveToDatabase = () => {
    csv()
        .fromFile('./data.csv')
        .then(async (items) => {

            console.log('items -> ', items)

            const { data, error } = await supabase
                .from('solar')
                .insert([
                    ...items
                ])

            if (error) {
                console.log('error supabase -> ', error?.message)
            } 

            if(data) {
                console.log('data save -> ', data)
            }

        })
}


scriptDataSaveToDatabase()