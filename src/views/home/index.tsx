// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import pkg from '../../../package.json';
import { CandyMint } from '../../components/CandyMint';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-0'>
          
        </div>
        
        <div className="relative group">
  <div className="relative z-10">
    <Image
      src="/solalienclusterlogo2.png" // Replace with your image path or URL
      alt="Sol Alien Cluster"
      layout="responsive"
      width={800} // Set appropriate width
      height={600} // Set appropriate height
      className="object-contain relative z-10 glow-image" // Adjust the size as needed
    />
  </div>
</div>

        <div className="flex flex-col mt-2">
          <CandyMint /> 
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
            {wallet && (
              <div className="flex flex-col items-center">
                <div className='text-center text-slate-420 ml-2'>
                 Welcome to the Sol Alien Cluster—a group of aliens chilling on the Solana Network.
Before there were chimps, there were aliens. Now it's time for the aliens to return and take over the world. It's time to destroy all humans.
                </div>
              </div>
            )}
          </h4>
        </div>
        
        {/* New Section with Text Field and Image */}
        <div className="mt-16"> {/* Increased margin-top for spacing */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Text Field on the Left */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mb-10">Uncompromised style</h2>
              <p className="text-lg text-gray-400">
  The aliens have learned one thing from humans: we have style. To blend in and disguise themselves as they prepare to take over the world again, the aliens are now dressed like humans.

In due time, you will see the aliens rule the world once more. When that happens, you'd better be holding a Sol Alien Cluster—otherwise, you may be incinerated.
</p>
            </div>

            {/* GIF on the Right */}
            <div className="flex-1">
              <Image
                src="/gif14.gif" // Replace with your image path or URL
                alt="Explore Sol Alien Cluster"
                layout="responsive"
                width={800} // Set appropriate width
                height={600} // Set appropriate height
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* New Section with Trading Info */}
        <div className="mt-16"> {/* Increased margin-top for spacing */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* GIF on the Left */}
            <div className="flex-1">
              <Image
                src="/gmsample.gif" // Replace with your image path or URL
                alt="Trading on Tensor and Magic Eden"
                layout="responsive"
                width={800} // Set appropriate width
                height={600} // Set appropriate height
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Text Field on the Right */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mb-10">Trade on Magic Eden</h2>
              <p className="text-lg text-gray-400">
                After minting your NFT, you can easily trade it on Tensor and Magic Eden. Enjoy a smooth trading experience with high liquidity and a secure platform of your choice. Sol Alien Cluster connects you with a vibrant community and offers great exposure for your NFT. Buy, sell, and explore new opportunities in the dynamic world of NFTs.
              </p>
            </div>
          </div>
        </div>
      {/* Additional Mint Button */}
      <div className="flex justify-center mt-16">
          <CandyMint />
        </div>
 
        {/* New Welcome Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mb-10">
            Join Our Community!
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Thank you for visiting the Sol Alien Cluster. Stay connected with us and be a part of our vibrant community. Join us on Twitter and Discord to keep up with the latest updates and engage with other members.
          </p>
          <div className="flex justify-center gap-8">
            <a href="https://x.com/mothership_nfts" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white py-2 px-4 rounded glow-button">Join us on Twitter</button>
            </a>
            <a href="https://discord.com/invite/CSH5bGcVP9" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white py-2 px-4 rounded glow-button">Join us on Discord</button>
            </a>
          </div>
        </div>
     
        {/* Icons Section */}
        <div className="w-full flex justify-center items-center mt-16 p-4 bg-transparent-900">
          <div className="flex space-x-4">
            <a href="https://www.mothershipnfts.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/collection.PNG" alt="Collection" width={50} height={40} />
            </a>
            <a href="https://x.com/mothership_nfts" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-logo.png" alt="Twitter" width={45} height={40} />
            </a>
            <a href="https://www.tensor.trade/trade/msac" target="_blank" rel="noopener noreferrer" className="move-up">
              <Image src="/tensor-logo.png" alt="Tensor" width={55} height={40} />
            </a>
            <a href="https://discord.gg/CSH5bGcVP9" target="_blank" rel="noopener noreferrer">
              <Image src="/discord-logo.png" alt="Discord" width={60} height={40} />
            </a>
            <a href="https://magiceden.io/marketplace/msac" target="_blank" rel="noopener noreferrer">
              <Image src="/magic-eden-logo.png" alt="Magic Eden" width={80} height={40} />
            </a> 
            <a href="https://www.mothershipnfts.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/NFTdroops-logo.webp" alt="Magic Eden" width={200} height={40} />
            </a> 
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-background-image {
          background-image: url('/cave.png'); /* Replace with your image path */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .glow-button {
          transition: box-shadow 0.3s ease;
        }
        .glow-button:hover {
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
        }
      `}</style>
    </div>
  );
};
