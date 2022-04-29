import React, { useState } from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsLight'
import './style.scss'

export default (props) => {

  const code = props.children.trim()

  function copy(text){
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="code-container">
      <Highlight {...defaultProps} code={code} language={'javascript'}
        theme={theme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={className} style={{...style, padding: '20px'}}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <div className="code-container-actions">
        <span onClick={(e) => copy(code)}>COPY CODE</span>
      </div>
    </div>
  )
}