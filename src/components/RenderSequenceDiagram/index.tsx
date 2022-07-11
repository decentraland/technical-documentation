import SequenceDiagram from 'react-sequence-diagram'
import React from 'react'

type Props = {
  input: string
}

function RenderSequenceDiagram({ input }: Props) {
  function onError() {
    return 'There was an error rendering the diagram'
  }

  return (
    <SequenceDiagram
      input={input}
      className="prueba"
      options={{
        theme: 'simple'
      }}
      onError={onError}
    />
  )
}

export default RenderSequenceDiagram
