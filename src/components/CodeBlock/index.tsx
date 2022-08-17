import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsLight'
import './style.scss'
import { FaCheck, FaCopy } from 'react-icons/fa'
import RenderSequenceDiagram from '../RenderSequenceDiagram'

export default (props) => {
  if (props.className === 'language-sequence') return <RenderSequenceDiagram input={props.children} />

  const [copied, setCopied] = useState<boolean>(false)
  const code = props.children.trim()

  async function copy(text) {
    await navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  type CopyProps = {
    copied: boolean
  }

  function Copy(props: CopyProps) {
    const { copied } = props
    return (
      <span
        className={copied ? 'code-action-copy code-action-animate' : 'code-action-copy'}
        onClick={(e) => copy(code)}
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? 'COPIED!' : 'COPY CODE'}
      </span>
    )
  }

  return (
    <div className="code-container">
      <Highlight {...defaultProps} code={code} language={'typescript'} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <div className="code-container-actions">
        <div className="code-actions-wrapper">
          <Copy copied={copied} />
        </div>
      </div>
    </div>
  )
}
