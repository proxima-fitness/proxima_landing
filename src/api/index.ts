import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://oivloxjpauqrggayaovk.supabase.co';
export const supabaseKey = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
