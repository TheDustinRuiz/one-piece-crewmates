import { createClient } from '@supabase/supabase-js'

const URL = 'https://aweamspdmcvjziclttem.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3ZWFtc3BkbWN2anppY2x0dGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5OTMyODgsImV4cCI6MjAyODU2OTI4OH0.x62MvCo8cTb4DZxXjvOaGy5S_u61wuFlu6tXDteCELs';

export const supabase = createClient(URL, API_KEY);