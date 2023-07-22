import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

export const supabase = createClient(process.env.PUBLIC_KEY, process.env.KEY)

