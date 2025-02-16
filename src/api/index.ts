import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL) {
    console.error('Supabase url is missing. Check your environment variables.');
}

if (!process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY) {
    console.error('Supabase key is missing. Check your environment variables.');
}

if (!process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_BLOG_URL) {
    console.error('Supabase blog url is missing. Check your environment variables.');
}

if (!process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_BLOG_KEY) {
    console.error('Supabase blog key is missing. Check your environment variables.');
}


export const supabaseUrl = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL;
export const supabaseBlogUrl = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_BLOG_URL;

export const supabaseKey = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY ?? "";
export const supabaseBlogKey = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_BLOG_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supablog = createClient(supabaseBlogUrl, supabaseBlogKey);
