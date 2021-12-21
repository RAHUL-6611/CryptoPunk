import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import PunkList from './components/PunkList'
import Main from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk,setSelectedPunk] = useState(0)

  useEffect(()=>{
    const getMyNfts = async()=>{
      const nftData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x9b86606518753d11fc924159e4a51fe526911a5a&order_direction=asc')
      // console.log(nftData.data.assets); //https://testnets.opensea.io/assets/<asset_contract_address>/<token_id>
      setPunkListData(nftData.data.assets);
    }
    console.log(punkListData);
   getMyNfts();
  },[])

  return (
    <div className="App">
      <Header />
      {
        punkListData.length > 0 &&
       (
         <>
         <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
         <PunkList nftdata={punkListData} setSelectedPunk={setSelectedPunk}/>
         </>
         )
      } 
  

    </div>
  );
}

export default App;
