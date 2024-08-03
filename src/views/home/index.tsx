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
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mb-10">
            Sol Alien Cluster
          </h1>
        </div>
        
        <div className="relative group">
  <div className="relative z-10">
    <Image
      src="/collection.PNG" // Replace with your image path or URL
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
                  Sol Alien Cluster is an NFT collection featuring 10,000 unique Aliens. Own a Sol Alien and support the Solana community. Connect with like-minded explorers, become a holder of an asset in the next revolutionary cryptocurrency, Solana.
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
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mb-10">Explore More</h2>
              <p className="text-lg text-gray-400">
  Dive deeper into the cosmic abyss with the sol alien cluster, an extraordinary NFT collection on the Solana blockchain. Each NFT in this collection is a unique digital artifact, generated to embody the infinite wonders of the universe. 
  Every Sol Alien NFT is one-of-a-kind, meticulously designed to ensure no two pieces are alike. This uniqueness is not just a feature; it&apos;s the essence of the collection.
  Art Meets Community. It&apos;s a representation of our vibrant community and its core values. Each Sol Alien embodies a piece of our collective spirit and creativity.
  By owning a Sol Alien, you’re not just acquiring digital art; you’re becoming a part of a revolutionary ecosystem. Our vision is to merge art with technology, fostering a community-driven project that thrives on innovation and shared values.
  Join Us on This Journey
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
                alt="Trading on Magic Eden"
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
                After minting your Sol Alien NFT, you can easily trade it on Magic Eden. Enjoy a smooth trading experience with high liquidity and a secure platform. Magic Eden connects you with a vibrant community and offers great exposure for your NFT. Buy, sell, and explore new opportunities in the dynamic world of NFTs.
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
      </div>
      <style jsx>{`
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
