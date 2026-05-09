import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "[SkillSync] Supabase env vars not set. " +
    "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file. " +
    "Auth features will not work until they are configured."
  );
}

// Export a real client when creds exist, otherwise a safe stub so the app still renders
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : {
      auth: {
        getSession:        () => Promise.resolve({ data: { session: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithOAuth:   () => Promise.resolve(),
      },
    };
