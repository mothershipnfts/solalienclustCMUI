import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NavElement from './nav-element';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
            <Link href="https://www.mothershipnfts.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-secondary hover:text-white">
                
                <svg width="100%" height="0" viewBox="0 0 656 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="paint0_linear_1064_606" x1="10.81" y1="98.29" x2="98.89" y2="-1.01005" gradientUnits="userSpaceOnUse">
                      <stop offset="0.08" stopColor="#006400" /> 
                      <stop offset="0.3" stopColor="#228B22" /> 
                      <stop offset="0.5" stopColor="#32CD32" /> 
                      <stop offset="0.6" stopColor="#7CFC00" /> 
                      <stop offset="0.72" stopColor="#ADFF2F" /> 
                      <stop offset="0.97" stopColor="#00FF00" /> 
                    </linearGradient>
                    <clipPath id="clip0_1064_606">
                      <rect width="646" height="96" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>


        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
          <NavElement
            label="Mint"
            href="/"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="Collection"
            href="https://magiceden.io/marketplace/msac"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
        </div>
          <label
              htmlFor="my-drawer"
              className="btn-gh items-center justify-between md:hidden mr-6"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div className={`h-0.5 w-8 bg-green-600 ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-green-600 ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-green-600 ${isNavOpen ? 'hidden' : ''}`} />
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-green-600 ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(45deg)" }}>
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-green-600 ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(135deg)" }}>
            </div>
        </label>
      <div>
        <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
      </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-square btn-ghost text-right mr-4">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
            <li>
              <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>             
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};
