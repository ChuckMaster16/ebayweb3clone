import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useAddress, useContract} from '@thirdweb-dev/react'



type Props = {}

function addItem({}: Props) {
    const address = useAddress();
    const { contract, isLoading, error } = useContract('0xEACA7DEB9F1351440615790afacD683983C855bd', "nft-collection")
    
  return (
    <div>
        <Header/>
            <main className='max-w-6xl mx-auto p-10 border'>
                <h1 className='text-4xl'>Add an Item to the Market place</h1>
                <h2>Item details</h2>
                <p>By adding an item to the marketplace, you are essentially
                    Minting an NFT of the item into your wallet which you 
                    can then list for Sell.
                </p>
                <div>

                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default addItem