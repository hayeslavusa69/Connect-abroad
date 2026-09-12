import React from 'react'; import {createRoot} from 'react-dom/client'; import {createClient} from '@supabase/supabase-js'; import App from './App'; import './index.css';
export const supabase=createClient('https://jkbsyccqufxkqogedsbx.supabase.co','sb_publishable_oI13K7ppEYzknUhDCO1wUA_Y-TDeOPn');
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
