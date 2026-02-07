import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zkrembzqlzokhfhmrpnw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcmVtYnpxbHpva2hmaG1ycG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4ODQ2NjMsImV4cCI6MjA4NTQ2MDY2M30.wNKkIh_QrlU1YChcI_aTiCGThyDd3KBzvfVQzE-mYPk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
