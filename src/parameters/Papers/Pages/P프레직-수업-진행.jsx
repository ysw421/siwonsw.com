import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import { MathComponent } from 'mathjax-react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function P프레직_수업_진행(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function changePage(offset) {
    if (pageNumber + offset >= 1 && pageNumber + offset <= numPages)
      setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      디미고를 입학할 때 기억이 납니다. 코파일럿을 사용해보고 경이로웠다고 그리고 내가 좋아하는 놀이 '코딩'을 일로 삼지
      못할까봐 두려워서 인공지능을 배워보고 싶다고 말했습니다. 이후 인공지능 동아리, 프레직의 동아리원이 되었으며 지금은
      2학년이 되었죠. 오늘은 제가 진행한 첫 수업이 있었던 날입니다. 오늘을 기억하며, 느낌점, 그리고 아쉬웠던 점을 간단히
      적어봅니다.
      <Height50 num="60px" />
      오늘 저는 선형회귀에 대하여 수업하였습니다. 사실 저도 평소 선형회귀를 직선으로 예측하는 모델이라 말하지만,
      선형회귀 정의에 벋어나지 않는 선형회귀를 알려주고 싶었습니다.
      <Height50 num="20px" />
      <div style={{ position: 'relative', height: '540px', overflow: 'hidden', borderRadius: '10px' }}>
        <Document
          file="/img/Page/프레직-수업-진행/LinearRegressionPDF.pdf"
          width="200px"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <Height50 num="20px" />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <SlArrowLeft onClick={() => changePage(-1)} style={{ cursor: 'pointer' }} className={styles.dragImpossible} />
        <div style={{ width: '185px', textAlign: 'center', transform: 'translateY(-4px)' }}>
          Page {pageNumber} of {numPages}
        </div>
        <SlArrowRight onClick={() => changePage(1)} style={{ cursor: 'pointer' }} className={styles.dragImpossible} />
      </div>
      <Height50 num="40px" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href={`/img/Page/download/linear_regression.ipynb`}
          download
          style={{ backgroundColor: 'rgb(216, 214, 214)', color: 'black', textAlign: 'center', textDecoration: 'none' }}
          className={styles.box}
        >
          📒코드 및 링크 ipynb파일 다운로드
        </a>
      </div>
      <Height50 num="20px" />
      이번 수업에서 핵심 2가지를 뽑자면, 머신러닝의 정의와 '평가'입니다. 선형회귀를 배우는 이유는 보다 머신러닝을 잘
      이해하기 위해서라고 생각합니다.
    </>
  );
}
