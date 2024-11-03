import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iqaeeggjnsuajbadigub.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYWVlZ2dqbnN1YWpiYWRpZ3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MzAwMDIsImV4cCI6MjA0NjAwNjAwMn0.8jMWKWXMQZ8GkhJGAdRMHJQ_n-LM1Z9ojvtx_IfAVx4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;