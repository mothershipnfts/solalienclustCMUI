// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

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
        <div className='mt-6'>
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-600 mb-10">
          Sol Alien Cluster
      </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 mb-2">
          <p>The Sol Alien Cluster is an NFT collection featuring 10,000 unique Aliens.  Own a Sol Alien and support the Solana community.   Connect with like-minded explorers, become the holder of an asset in the next revolutionary cryptocurrency, Solana.</p>
          <p className='text-slate-500 text-2x1 leading-relaxed'>Mint live</p>
        </h4>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div>
            <img
              src="https://salmon-tory-unicorn-148.mypinata.cloud/ipfs/QmaEPaF7BXAehPbGHJWo24hdzLLjrMguMQgUgCYJSRbiuA"  // Replace with your image path or URL
              alt="Sol Alien Cluster"
              className="w-full h-auto max-h-80 object-contain" // Adjust the size as needed
             />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <CandyMint /> 
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            
              <div className='text-slate-600 ml-2'>
                Get your Solana NFT Now!
              </div>
          </div>
          }
          </h4>
        </div>
      </div>
    </div>
  );
};
