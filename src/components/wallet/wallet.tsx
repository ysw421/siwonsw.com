/* eslint-disable react-hooks/exhaustive-deps */

import { MouseEventHandler, useEffect, useMemo } from 'react';
import { ChainCard } from '.';
import { Address } from './react/views';
import {
  ArrowPathIcon,
  ArrowDownTrayIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { useChain } from '@cosmos-kit/react';
import { WalletStatus } from '@cosmos-kit/core';
import { chainName } from '../wallet/config';

const buttons = {
  Disconnected: {
    icon: WalletIcon,
    title: 'Connect Wallet',
  },
  Connected: {
    icon: WalletIcon,
    title: 'My Wallet',
  },
  Rejected: {
    icon: ArrowPathIcon,
    title: 'Reconnect',
  },
  Error: {
    icon: ArrowPathIcon,
    title: 'Change Wallet',
  },
  NotExist: {
    icon: ArrowDownTrayIcon,
    title: 'Install Wallet',
  },
};

export const WalletSection = () => {
  const {
    connect,
    openView,
    status,
    username,
    address,
    chain: chainInfo,
    logoUrl,
  } = useChain(chainName);

  const chain = {
    chainName,
    label: chainInfo.pretty_name,
    value: chainName,
    icon: logoUrl,
  };

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const _renderConnectButton = useMemo(() => {
    // Spinner
    if (status === WalletStatus.Connecting) {
      return (
        <button className='bg-purple-damp hover:bg-purple-damp/75 inline-flex w-full cursor-wait items-center justify-center rounded-lg py-2.5 font-medium text-white'>
          <svg
            className='h-5 w-5 animate-spin text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </button>
      );
    }

    let onClick;
    if (
      status === WalletStatus.Disconnected ||
      status === WalletStatus.Rejected
    )
      onClick = onClickConnect;
    else onClick = onClickOpenView;

    const buttonData = buttons[status];

    return (
      <button
        className='bg-purple-damp hover:bg-purple-damp/75 inline-flex w-full items-center justify-center rounded-lg py-2.5 font-medium text-white'
        onClick={onClick}
      >
        <buttonData.icon className='mr-2 h-5 w-5 flex-shrink-0 text-white' />
        {buttonData.title}
      </button>
    );
  }, [onClickConnect, onClickOpenView, status]);

  return (
    <div className='mx-auto w-full max-w-sm pt-12 pb-16'>
      <div className='grid grid-cols-1 gap-4'>
        {chainName && (
          <div className='mb-4'>
            <ChainCard
              prettyName={chain?.label || chainName}
              icon={chain?.icon}
            />
          </div>
        )}
        <div className='px-6'>
          <div className='dark:bg-gray-lightbg mb-2 flex flex-col items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-6 dark:border-white/10 md:py-12'>
            <div>
              {username && (
                <div className='mx-auto mb-2 flex flex-row items-center space-x-2'>
                  <div className='mx-auto h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500'></div>
                  <p className='mt-2 mb-2 text-lg font-medium text-black dark:text-white'>
                    {username}
                  </p>
                </div>
              )}
            </div>
            {address ? <Address>{address}</Address> : <></>}
            <div className='w-full max-w-[52] px-8 md:max-w-[64]'>
              {_renderConnectButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
