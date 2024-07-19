import React, { useState, useEffect, useRef } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { unescape, replaceNops } from '../modules/template'
import ejs from 'ejs'
import '../index.css';

const MarkdownEditor = ({ data, docConfig }) => {
  const [markdown, setMarkdown] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const textareaRef = useRef(null)
  const lineNumberRef = useRef(null)

  useEffect(() => {
    if (data) {
      updateMarkdown(data)
    }
  }, [data])

  const updateMarkdown = (data) => {
    if (!docConfig) return

    const templateWithArrayName = docConfig.content.replace(
      /arrayName/g,
      'data'
    )
    let html = ejs.render(templateWithArrayName, { data })
    html = marked(html)
    html = replaceNops(html)
    html = unescape(html)

    setMarkdown(html)
    setHtmlContent(DOMPurify.sanitize(html))
  }

  const handleInputChange = (e) => {
    setMarkdown(e.target.value)
  }

  useEffect(() => {
    const updateHtmlContent = async () => {
      let html = markdown
      html = marked(html)
      html = replaceNops(html)
      html = unescape(html)
      setHtmlContent(DOMPurify.sanitize(html))
    }

    updateHtmlContent()
  }, [markdown])

  const handleScroll = () => {
    if (textareaRef.current && lineNumberRef.current) {
      lineNumberRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col h-[92vh]'>
        <div className='flex flex-col p-4 h-full bg-white shadow-md border border-gray-300'>
          <h2 className='text-xs font-semibold text-gray-400 mb-2'>
            DOCUMENT NAME
          </h2>
          <input
            type='text'
            value={docConfig?.name + '.md' || 'Untitled Document.md'}
            className='text-base w-full mb-4 p-2 border border-gray-300 rounded bg-gray-100'
            readOnly
          />
          <div className='flex flex-grow h-full'>
            <div className='w-1/2 pr-2 flex flex-col h-full'>
              <h3 className='text-xs font-semibold mb-2 text-gray-400'>
                MARKDOWN
              </h3>
              <div className='relative flex-grow h-full overflow-hidden'>
                <div
                  ref={lineNumberRef}
                  id='lineNumbers'
                  className='absolute inset-y-0 left-0 w-12 bg-gray-100 border-r border-gray-300 text-gray-400 text-right pr-2 overflow-hidden'
                  style={{ lineHeight: '1.5em' }}
                >
                  {markdown?.split('\n').map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                <textarea
                  ref={textareaRef}
                  value={markdown}
                  onChange={handleInputChange}
                  onScroll={handleScroll}
                  placeholder='Type your markdown here...'
                  className='markdown h-full w-full p-2 pl-14 border border-gray-300 bg-white rounded resize-none text-base leading-relaxed overflow-auto'
                />
              </div>
            </div>
            <div className='w-1/2 pl-2 flex flex-col h-full'>
              <h3 className='text-xs font-semibold mb-2 text-gray-400'>
                PREVIEW
              </h3>
              <div
                id='docPreviewEditor'
                className='markdown h-full p-2 border border-gray-300 rounded bg-white overflow-auto text-base leading-relaxed'
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarkdownEditor
