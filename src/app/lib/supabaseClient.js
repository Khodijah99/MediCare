// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://lkxueerwnhgmajyvvwuj.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxreHVlZXJ3bmhnbWFqeXZ2d3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjY3MzAsImV4cCI6MjA0NTQ0MjczMH0.Uv13-7hGosatbbrH-qtvi77c8ndKGdtQuT8PVK9zluY"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
