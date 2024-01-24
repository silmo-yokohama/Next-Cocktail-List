import { createClient } from "@supabase/supabase-js";

const SUPABASE_ENDPOINT = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY!;

export const supabase = createClient(SUPABASE_ENDPOINT, SUPABASE_API_KEY, {
  auth: {
    persistSession: false,
  },
});
