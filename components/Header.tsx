import React from 'react'
import {useAddress,useDisconnect, useMetamask} from "@thirdweb-dev/react";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

function Header({}: Props) {
    const connectWithMetamask = useMetamask();
    const disconnectWithMetamask = useDisconnect();
    const address = useAddress();
  return (
    <div className='max-w-6xl mx-auto p-2'>
        <nav className='flex justify-between'>
            <div className='flex items-center space-x-4 '> 
            <Link href='/'
            className='hidden xs:inline sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
                    <Image 
                    alt='THirdweb ebaylogo'
                    width={100}
                    height={100}
                    src='https://res.cloudinary.com/chuckmaster/image/upload/v1668404667/ebayClone/ebay_m1crq5.png'
                    className=' h-full w-full object-contain'/>
                </Link>
                {address ? (<button onClick={disconnectWithMetamask} className='connectWalletbtn text-xs'>Hi, {address.slice(0,5) + "..." + address.slice(-4)}</button>
                ) :(
                <button onClick={connectWithMetamask} className='connectWalletbtn text-xs'>Connect To Your wallet </button>) }

                <p className='headerLinks'>eBay Offers</p> 
                <p className='headerLinks'>Help & Contact</p> 
            </div>
            <div className='flex items-center text-sm space-x-4'>
                <LanguageIcon className='headerLinks'/>
                <p className='headerLinks'>Ship to</p>
                <p className='headerLinks'> Sell</p>
                <p className='headerLinks'>Watchlist</p>
                <Link className='flex items-center hover:link' href="/addItem"> Add to inventory <ExpandMoreIcon/></Link>
                <p className='headerLinks'> My eBay <span><ExpandMoreIcon/></span></p>
                <NotificationsNoneIcon/>
                <ShoppingCartOutlinedIcon/>
                <p className=''></p>
            </div>
        </nav>
        <hr className='mt-2 w-screen -ml-20' />
         
         <section className='flex items-center space-x-2 py-5'>
            <div className='h-16 mt-2 w-28 md:w-44 cursor-pointer flex-shrink-0 hidden sm:inline'>
                <Link href='/'>
                    <Image 
                    alt='THirdweb ebaylogo'
                    width={100}
                    height={100}
                    src='https://res.cloudinary.com/chuckmaster/image/upload/v1668404667/ebayClone/ebay_m1crq5.png'
                    className=' h-full w-full object-contain'/>
                </Link>
            </div>
            <button className='hidden lg:flex items-center space-x-2 w-20'>
                <p className='text-gray-600 text-sm'>Shop by Category</p>
            <ExpandMoreIcon/>
            </button>

            <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1'>
                <SearchOutlinedIcon className='text-gray-300 '/>
                <input className='flex-1 outline-none' type='text' placeholder='Search for anything'/>
                <button className='border-gray-300 border-l  pl-4 whitespace-nowrap text-sm'> All Catergories <ExpandMoreIcon/></button>
            </div>

            <button className='hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-700'>Search</button>       
           {address ? ( <Link href='/create'>
                    <button className=' border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white whitespace-nowrap'>List Item</button>
            </Link>):('')}
         </section>
         <hr className=' w-screen -ml-20' />

         <section>
            <div className='flex justify-around items-center py-1 text-sm whitespace-nowrap'>
                <Link className='link' href='/'><p>Home</p></Link>                
                <p className='link'><FavoriteOutlinedIcon/> Saved </p>
                <p className='link'>Electronics</p>
                <p className='link'>Fashion</p>
                <p className='link hidden sm:inline'>Health & Beauty</p>
                <p className='link hidden sm:inline'>Motors</p>
                <p className='link hidden md:inline'>Collectibles and Art</p>
                <p className='link hidden lg:inline'>Industrial equipment</p>
                <p className='link hidden lg:inline'>Sports</p>
                <p className='link hidden lg:inline'> Home & Garden</p>
                <p className="link hidden xl:inline">Deals</p>
                <p className="link hidden xl:inline">Sell</p>
                <p className='link'>More <ExpandMoreIcon/></p>

            </div>
         </section>
        
    </div>
  )
}

export default Header