import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import { TailwindModal } from '@/components/wallet';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets as vectisWallets } from '@cosmos-kit/vectis';
import { wallets as wcv2Wallets } from '@cosmos-kit/walletconnect-v2';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { Chain } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';
import { Decimal } from '@cosmjs/math';
import Navbar from '@/components/navbar/Navbar';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const signerOptions = {
    signingStargate: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'juno':
          return {
            gasPrice: new GasPrice(Decimal.fromUserInput('25000', 2), 'ujuno'),
          };
        default:
          return undefined;
      }
    },
  };

  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
      wallets={[
        ...wcv2Wallets,
        ...keplrWallets,
        ...cosmostationWallets,
        ...leapWallets,
        ...vectisWallets,
      ]}
    >
      <div className='fixed left-0 top-0 z-50 w-full'>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </ChainProvider>
  );
}

export default MyApp;
