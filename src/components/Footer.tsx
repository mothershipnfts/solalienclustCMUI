import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-black hover:text-white w-screen" >
                <div className="ml-12 py-12 mr-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
                            <div className='flex flex-row ml-1'>
                                <Link href="https://mothershipnfts.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    <div className='flex flex-row ml-1'>
                                        <Image
                                            src="/solanaLogo.png"
                                            alt="solana icon"
                                            width={300}
                                            height={200}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex md:ml-2">
                        <a 
                            href="https://x.com/mothership_nfts" 
                            type="button" 
                            className="text-secondary hover:text-white leading-normal transition duration-150 ease-in-out w-9 h-9 m-1 flex items-center justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <svg 
                            aria-hidden="true"
                            focusable="false"
                            className="w-32 h-32 mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                                </a>
                                <a 
                                href="https://discord.com/invite/CSH5bGcVP9"  
                                type="button" 
                                className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <svg 
                                    aria-hidden="true"
                                    focusable="false"
                                    className="w-16 h-8 mx-auto"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 3 12 20"
                                    fill="currentColor"
                                >
                                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.209.365-.444.844-.608 1.217-1.844-.276-3.68-.276-5.486 0-.164-.384-.418-.883-.633-1.248a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.165-.319 13.773.099 18.335a.082.082 0 0 0 .031.056 19.888 19.888 0 0 0 5.995 3.033.078.078 0 0 0 .084-.028 14.822 14.822 0 0 0 1.257-2.05.076.076 0 0 0-.041-.109 13.22 13.22 0 0 1-1.91-.917.077.077 0 0 1-.007-.127c.127-.094.254-.192.375-.291a.073.073 0 0 1 .076-.01c4.014 1.837 8.346 1.837 12.286 0a.073.073 0 0 1 .078.009c.12.099.248.198.375.291a.077.077 0 0 1-.006.127c-.61.354-1.238.671-1.91.917a.076.076 0 0 0-.04.11 14.8 14.8 0 0 0 1.257 2.05.077.077 0 0 0 .084.028 19.876 19.876 0 0 0 6.001-3.033.078.078 0 0 0 .031-.055c.5-5.177-.838-9.738-3.63-13.939a.061.061 0 0 0-.032-.028zm-11.28 9.735c-1.137 0-2.074-1.045-2.074-2.327 0-1.282.918-2.327 2.074-2.327 1.143 0 2.074 1.045 2.074 2.327.002 1.282-.931 2.327-2.074 2.327zm6.683 0c-1.137 0-2.074-1.045-2.074-2.327 0-1.282.918-2.327 2.074-2.327 1.143 0 2.074 1.045 2.074 2.327 0 1.282-.931 2.327-2.074 2.327z"/>
                                </svg>
                                </a>
                            </div>
                            <div className="mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary">
                                        © 2024 Mothership NFTs
                            </div>                                                      
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
