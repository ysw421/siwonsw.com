import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function MindMap() {
  return (
    <>
      {/* <TransformComponent>
        <TransformWrapper
          initialScale={1}
          initialPositionX={innerSize.width / 2 - canvasSize.width / 2}
          initialPositionY={innerSize.height / 2 - canvasSize.height / 2}
          limitToBounds={false}
          minScale={0.2}
        >
          <span className='text-5xl'>hello</span>
        </TransformWrapper>
      </TransformComponent> */}
      <TransformWrapper limitToBounds={false} minScale={0.2} initialScale={1}>
        <TransformComponent>
          <span className='text-5xl'>hello</span>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
