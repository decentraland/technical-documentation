import React, { Suspense } from 'react'

const SequenceDiagram = React.lazy(() => import('react-sequence-diagram'))

type Props = {
  input: string
}

function RenderSequenceDiagram({ input }: Props) {
  const isSSR = typeof window === 'undefined'

  function onError() {
    return 'There was an error rendering the diagram'
  }

  return (
    <div>
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <SequenceDiagram
            input={input}
            className="diagram-render"
            options={{
              theme: 'simple'
            }}
            onError={onError}
          />
        </Suspense>
      )}
    </div>
  )
}

export default RenderSequenceDiagram
