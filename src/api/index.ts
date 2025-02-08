import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://oivloxjpauqrggayaovk.supabase.co';
if (!process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY) {
    console.error('Supabase key is missing. Check your environment variables.');
}

export const supabaseKey = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseKey);
