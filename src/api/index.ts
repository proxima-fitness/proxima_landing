import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://oivloxjpauqrggayaovk.supabase.co';
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
