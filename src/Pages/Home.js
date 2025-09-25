import React from 'react'

import Banner from '../Components/Banner';
import Collection from '../Components/Collection';
import Subscribe from '../Components/Subscribe';
import Exchange from '../Components/Exchange';
import FeatureCollection from '../Components/FeatureCollection';
function Home() {
  return (
<>

<Banner/>
<FeatureCollection title="LATEST COLLECTIONS" limit={10}/>
<FeatureCollection title="BEST SELLERS" limit={5}/>
<Exchange/>

</> 
  )
}

export default Home
