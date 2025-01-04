import { supabase } from ".";
import { User } from '@supabase/supabase-js';

// GET THE TRENDING PROGRAMS DISPLAYED ON THE EXPLORE PAGE
export const getTrendingPrograms = async () => {
    try {
        const { data, error } = await supabase
        .from('trending')
        .select('id,title_english, title_espanol, title_portugues, title_francais, program_ids');
        if (error) {
            console.error('Error fetching trending programs:', error);
        } else if (data && data.length > 0 ) {
            return data;
        }
    } catch (error: unknown) {
        console.error('Error fetching trending programs:', error);
    }
};
