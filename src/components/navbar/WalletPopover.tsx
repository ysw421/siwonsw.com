import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { useChain } from '@cosmos-kit/react';
import Link from 'next/link';

// TODO do this with the options below
// find out the right way to the chainsList
const chainsList = [{ name: 'ATOM' }, { name: 'OSMO' }, { name: 'JUNO' }];
import { GasPrice } from '@cosmjs/stargate';

export default function WalletPopover() {
  const chainContext = useChain('juno');

  const {
    chain,
    assets,
    wallet,
    logoUrl,
    status,
    username,
    address,
    message,
    isWalletDisconnected,
    isWalletConnecting,
    isWalletConnected,
    isWalletRejected,
    isWalletNotExist,
    isWalletError,
    connect,
    disconnect,
    openView,
    closeView,
    getRpcEndpoint,
    getRestEndpoint,
    getStargateClient,
    getCosmWasmClient,
    getSigningStargateClient,
    getSigningCosmWasmClient,
    getNameService,
    estimateFee,
    sign,
    broadcast,
    signAndBroadcast,
    // from wallet client
    enable,
    getOfflineSigner,
    getOfflineSignerAmino,
    getOfflineSignerDirect,
  } = chainContext;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address ?? '');
    } catch (err) {
      // TODO use a logging framework
      console.error(`Failed to copy ${chain.chain_name} address: `, err);
    }
  };

  return (
    <>
      {/* Profile dropdown */}
      <Popover className='relative ml-3'>
        <>
          <Popover.Button
            className={
              'flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            }
          >
            <img
              className='h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  <p className='flex justify-center text-base font-medium text-gray-900'>
                    <img
                      className='h-20 w-20 rounded-full '
                      src={logoUrl}
                      alt=''
                    />
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    <form>
                      <label className='relative block'>
                        <input
                          className='placeholder:font-italitc w-full rounded-md border border-slate-400 bg-white py-2 pl-3 pr-10 focus:outline-none'
                          value={address?.slice(0, 20).concat('...')}
                          type='text'
                          disabled
                        />

                        <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6   hover:cursor-pointer active:translate-y-1'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                            onClick={() => copyAddress()}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                            />
                          </svg>
                        </span>
                      </label>
                    </form>
                  </p>

                  <select
                    id='large'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  >
                    <option defaultValue={chain.chain_id}>
                      {chain.chain_name
                        .charAt(0)
                        .toUpperCase()
                        .concat(
                          chain.chain_name.substring(1, chain.chain_name.length)
                        )}
                    </option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option>
                  </select>

                  <Link href={''} onClick={() => disconnect()}>
                    <button className='w-full rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700'>
                      Disconnect
                    </button>
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </>
  );
}
