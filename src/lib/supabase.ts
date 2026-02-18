import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Provide fallback values to prevent errors if env vars are missing
// These should be set in Netlify environment variables
const fallbackUrl = 'https://elqoohgpmfqyiliybkjk.supabase.co';
const fallbackKey = 'sb_publishable_vxolj2B74LUw07DJTUvVvQ_AEw9tNEp';

const finalUrl = supabaseUrl || fallbackUrl;
const finalKey = supabaseAnonKey || fallbackKey;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing. Using fallback values. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Netlify.');
}

export const supabase = createClient(finalUrl, finalKey);
