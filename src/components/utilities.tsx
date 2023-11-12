import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

// import { Document, Page } from 'react-pdf';
import styles from './animation.module.scss';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export function SubTitle({ subTitle }: { subTitle: string }) {
  return (
    <div className='flex flex-col gap-0'>
      <p className='mt-8 mb-2 text-3xl font-fontMain'>{subTitle}</p>
      <div className='mb-6 h-[2px] w-full rounded-full bg-dark dark:bg-light' />
    </div>
  );
}

const ButtonSize = ['sm', 'base'] as const;

type BoxProps = {
  children: ReactNode;
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  leftIconClassName?: string;
  className?: string;
};

export const Box = forwardRef<HTMLButtonElement, BoxProps>(
  ({
    children,
    className = '',
    size = 'base',
    leftIcon: LeftIcon,
    leftIconClassName,
  }) => {
    return (
      <div className='w-full my-8'>
        <div
          className={clsxm(
            `mx-auto h-auto w-fit max-w-full overflow-x-auto rounded-md bg-[#d7d6d6] p-3 dark:bg-[#555c6e] ${styles.transition}`,
            className
          )}
        >
          {LeftIcon && (
            <div
              className={clsxm([
                size === 'base' && 'mr-1',
                size === 'sm' && 'mr-1.5',
              ])}
            >
              <LeftIcon
                className={clsxm(
                  [
                    size === 'base' && 'md:text-md text-md translate-y-[4px]',
                    size === 'sm' && 'md:text-md translate-y-[4px] text-sm',
                  ],
                  leftIconClassName
                )}
              />
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);

export const InlineBox = forwardRef<HTMLButtonElement, BoxProps>(
  ({
    children,
    className = '',
    size = 'base',
    leftIcon: LeftIcon,
    leftIconClassName,
  }) => {
    return (
      <div
        className={clsxm(
          `mx-auto flex h-auto w-fit rounded-md bg-[#d7d6d6] p-3 dark:bg-[#555c6e] ${styles.transition}`,
          className
        )}
      >
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={clsxm(
                [
                  size === 'base' && 'md:text-md text-md translate-y-[4px]',
                  size === 'sm' && 'md:text-md translate-y-[4px] text-sm',
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
      </div>
    );
  }
);

export function MathBox({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsxm('my-8 flex flex-col gap-3 text-2xl', className)}>
      {children}
    </div>
  );
}

export function MovieBox({
  title,
  subTitle,
  director,
  cast,
  imgSrc,
  isHideDirectorCast = false,
}: {
  title: string;
  subTitle: string;
  director: string;
  cast: string;
  imgSrc: string;
  isHideDirectorCast?: boolean;
}) {
  return (
    <div className='w-full mb-8'>
      <div className='mx-auto flex min-w-[320px] max-w-[550px] flex-col gap-2 md:flex-row md:gap-8 '>
        <NextImage
          src={imgSrc}
          width={200}
          height={100}
          alt='Movie Poster'
          imgClassName='rounded-lg'
        />
        <div className='whitespace-pre-wrap'>
          <p className='text-3xl font-fontMain'>{title}</p>
          <p className='text-sm font-fontMain'>{subTitle}</p>
          {isHideDirectorCast ? null : (
            <>
              <p className='mt-0 md:mt-8'>{`감독: ${director}`}</p>
              <p className='pl-10 -indent-10'>{`출연: ${cast}`}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Hr({ className = '' }: { className?: string }) {
  return (
    <div
      className={clsxm(
        `my-6 h-[2px] w-full rounded-full bg-dark dark:bg-light`,
        className
      )}
    />
  );
}

export function ImageBox({
  imgSrc,
  alt = 'image',
  className = '',
}: {
  alt?: string;
  imgSrc: string;
  className?: string;
}) {
  const imageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [imageWidth, setImageWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (imageRef.current) setImageWidth(imageRef.current.offsetWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (imageRef.current) setImageWidth(imageRef.current.offsetWidth);
      });
    };
  }, []);

  useEffect(() => {
    setImageWidth(imageRef.current.offsetWidth);
  }, []);

  return (
    <div className={clsxm('mb-8 w-full', className)} ref={imageRef}>
      <div className='flex flex-col gap-2 mx-auto w-fit md:flex-row md:gap-8'>
        <NextImage
          src={imgSrc}
          width={imageWidth}
          height={100}
          alt={alt}
          imgClassName='rounded-lg'
        />
      </div>
    </div>
  );
}

export function PdfPreview({
  fileSrc,
  rate = 16 / 9,
}: {
  fileSrc: string;
  rate?: number;
}) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pdfRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function changePage(offset: number) {
    if (numPages && pageNumber + offset >= 1 && pageNumber + offset <= numPages)
      setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number | null }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div
        className='w-full overflow-hidden rounded-lg select-none bg-light dark:bg-dark'
        ref={pdfRef}
        style={{ aspectRatio: rate }}
      >
        <Document
          file={fileSrc}
          onLoadSuccess={onDocumentLoadSuccess}
          // className='w-full h-full bg-white'
        >
          <Page
            pageNumber={pageNumber}
            width={pdfRef.current ? pdfRef.current.offsetWidth : 100}
          />
        </Document>
      </div>
      <div className='flex justify-center gap-3 mt-1/2'>
        <SlArrowLeft
          onClick={() => changePage(-1)}
          style={{ cursor: 'pointer' }}
          className={styles.dragImpossible}
        />
        <span className='w-52 -translate-y-[4px] select-none text-center'>
          {`Page ${pageNumber} of ${numPages}`}
        </span>
        <SlArrowRight
          onClick={() => changePage(1)}
          style={{ cursor: 'pointer' }}
          className={styles.dragImpossible}
        />
      </div>
    </>
  );
}
