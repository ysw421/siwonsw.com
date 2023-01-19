/* eslint-disable @next/next/no-img-element */
import { useChain } from '@cosmos-kit/react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { QRCodeSVG } from 'qrcode.react';

export const QRCode = ({
  onClose,
  onReturn,
  qrUri,
  name,
}: {
  onClose: () => void;
  onReturn: () => void;
  qrUri?: string;
  name?: string;
}) => {
  return (
    <div className='mt-3 text-center sm:mt-1.5 sm:text-left'>
      <div className='flex flex-row items-center justify-between'>
        <button
          type='button'
          className='dark:bg-gray-lightbg rounded-full bg-white p-2 text-black hover:bg-gray-200 dark:text-white dark:hover:bg-white/10'
          onClick={onReturn}
        >
          <span className='sr-only'>Return</span>
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        </button>
        <Dialog.Title
          as='h3'
          className='text-center font-medium leading-6 text-gray-900 dark:text-white'
        >
          {name}
        </Dialog.Title>
        <button
          type='button'
          className='dark:bg-gray-lightbg rounded-full bg-white p-2 text-black hover:bg-gray-200 dark:text-white dark:hover:bg-white/10'
          onClick={onClose}
        >
          <span className='sr-only'>Close</span>
          <XMarkIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
      <div className='mb-4 w-full'>
        <div className='mt-4'>
          <QRCodeSVG
            value={qrUri || ''}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            className='mx-auto h-64 w-auto rounded-lg border border-black/10 p-4 dark:border-white/10'
          />
        </div>
      </div>
    </div>
  );
};
