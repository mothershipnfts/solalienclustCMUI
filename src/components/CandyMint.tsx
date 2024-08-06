import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { notify } from "../utils/notifications";
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { generateSigner, transactionBuilder, publicKey, some } from '@metaplex-foundation/umi';
import { fetchCandyMachine, mintV2, mplCandyMachine, safeFetchCandyGuard } from "@metaplex-foundation/mpl-candy-machine";
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as bs58 from 'bs58';

const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');
const candyMachineAddress = publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);

export const CandyMint: FC = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const { getUserSOLBalance } = useUserSOLBalanceStore();

    const [mintPrice, setMintPrice] = useState(0.122); // Replace with dynamic fetch if needed
    const [networkFees, setNetworkFees] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const fetchNetworkFees = async () => {
            try {
                const fee = await connection.getMinimumBalanceForRentExemption(0);
                setNetworkFees(fee / LAMPORTS_PER_SOL);
            } catch (error) {
                console.error("Failed to fetch network fees:", error);
            }
        };

        fetchNetworkFees();
    }, [connection]);

    useEffect(() => {
        setTotalCost(mintPrice + networkFees);
    }, [mintPrice, networkFees]);

    const umi = useMemo(() =>
        createUmi(quicknodeEndpoint)
            .use(walletAdapterIdentity(wallet))
            .use(mplCandyMachine())
            .use(mplTokenMetadata()),
        [wallet]
    );

    const onClick = useCallback(async () => {
        if (!wallet.publicKey) {
            console.log('error', 'Wallet not connected!');
            notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
            return;
        }

        try {
            const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
            const candyGuard = await safeFetchCandyGuard(umi, candyMachine.mintAuthority);

            const nftMint = generateSigner(umi);
            const transaction = await transactionBuilder()
                .add(setComputeUnitLimit(umi, { units: 800_000 }))
                .add(
                    mintV2(umi, {
                        candyMachine: candyMachine.publicKey,
                        candyGuard: candyGuard?.publicKey,
                        nftMint,
                        collectionMint: candyMachine.collectionMint,
                        collectionUpdateAuthority: candyMachine.authority,
                        mintArgs: {
                            solPayment: some({ destination: treasury }),
                        },
                    })
                );

            const { signature } = await transaction.sendAndConfirm(umi, {
                confirm: { commitment: "confirmed" },
            });

            const txid = bs58.encode(signature);
            console.log('success', `Mint successful! ${txid}`);
            notify({ type: 'success', message: 'Mint successful!', txid });

            getUserSOLBalance(wallet.publicKey, connection);
        } catch (error: any) {
            notify({ type: 'error', message: `Error minting!`, description: error?.message });
            console.log('error', `Mint failed! ${error?.message}`);
        }
    }, [wallet, connection, getUserSOLBalance, umi]);

    return (
        <div className="flex flex-col items-center">
            <h1></h1>
            <p>Mint Price: {mintPrice} SOL</p>
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 
                    rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-black"
                    onClick={onClick}
                >
                    <span>Mint NFT</span>
                </button>
            </div>
        </div>
    );
};
