import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://skuubkfpuftxfsfpoodd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrdXVia2ZwdWZ0eGZzZnBvb2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc0NDI5NjYsImV4cCI6MTk2MzAxODk2Nn0.T9H7ORWDgOJh62KOhzKr5DfJaACDTU7yQmP4qYUp-r0';
const supabase = createClient(supabaseUrl, supabaseKey);

// console.log('Supabase inicializado', supabase);

export default function useSupabase() {
  return { supabase };
}
