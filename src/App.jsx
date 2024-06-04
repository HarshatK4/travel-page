import { Route, Routes} from 'react-router-dom';
import AllMeetUp from './components/pages/AllMeetUp';
import NewMeetup from './components/pages/NewMeetup';
import Favorite  from './components/pages/Favorite';
import React from 'react';

import Layout from './components/layouts/Layout';
export default function App(){
  return(
   <div>
   
    <Layout>
    <Routes>
      <Route path='/' element={<AllMeetUp />} />
      <Route path='/new-meetup' element={ <NewMeetup />} />
      <Route path='/favorite' element={ <Favorite />} />
    </Routes>
    </Layout>
    </div>
    
  );
}