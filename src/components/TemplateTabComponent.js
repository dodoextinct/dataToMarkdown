import React, { useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { getTemplates } from '../modules/template'

const TemplateTabComponent = ({ onTemplateSelected }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [docName, setDocName] = useState('')
  const [docDesc, setDocDesc] = useState('')

  const templates = getTemplates()

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template)
  }

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      const docConfig = {
        content: selectedTemplate.content,
        name: docName,
        desc: docDesc
      }

      onTemplateSelected(docConfig)
      setIsModalOpen(false)
    }
  }

  const handleCreateDoc = () => {
    setIsModalOpen(true)
  }

  const createPreviewMarkup = (content) => {
    const rendered = marked(content)
    const sanitized = DOMPurify.sanitize(rendered)
    return { __html: sanitized }
  }

  return (
    <div className='relative h-[88vh] p-2 bg-gray-100 text-xs'>
      <div
        className={`grid grid-cols-3 gap-4 h-full ${
          isModalOpen ? 'blur-sm' : ''
        }`}
      >
        <div className='col-span-1 bg-white p-4 rounded-lg shadow-md overflow-auto'>
          <h2 className='text-xs font-bold mb-4'>Select a Template</h2>
          <div className='space-y-4'>
            {templates.map((template) => (
              <div
                key={template.id}
                className={`flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-customGrayLight hover:text-white transition-all duration-300 ${
                  selectedTemplate?.id === template.id
                    ? 'border-customGrayLight bg-customGrayLight text-white'
                    : 'border-gray-300 bg-white'
                }`}
                onClick={() => handleTemplateClick(template)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-list-check'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M3.5 5.5l1.5 1.5l2.5 -2.5' />
                  <path d='M3.5 11.5l1.5 1.5l2.5 -2.5' />
                  <path d='M3.5 17.5l1.5 1.5l2.5 -2.5' />
                  <path d='M11 6l9 0' />
                  <path d='M11 12l9 0' />
                  <path d='M11 18l9 0' />
                </svg>
                <h3 className='text-xs font-semibold'>{template.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-2 bg-white p-4 rounded-lg shadow-md'>
          {selectedTemplate ? (
            <div>
              <h2 className='text-xl font-bold mb-4'>Template Preview</h2>
              <div
                dangerouslySetInnerHTML={createPreviewMarkup(
                  selectedTemplate.preview
                )}
                className='preview mt-2 text-gray-700 bg-white p-4 rounded-lg shadow-inner'
              />
              <div className='mt-4 w-full flex justify-end'>
                <button
                  className='px-4 py-2 bg-customGrayLight hover:bg-blue-300 transition-all duration-300 text-white rounded-lg shadow-lg'
                  onClick={handleCreateDoc}
                >
                  Create Document
                </button>
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <p className='text-gray-500'>Select a template to preview</p>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className='fixed inset-0 top-44 flex items-center justify-center z-50'>
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75'></div>
          <div className='bg-white p-6 rounded-lg shadow-lg w-1/3 z-10'>
            <h2 className='text-xl font-bold mb-4'>Confirm Template</h2>
            <div className='mb-4'>
              <label className='block text-gray-700'>Document Name</label>
              <input
                type='text'
                className='w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>
                Document Description
              </label>
              <textarea
                className='w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                value={docDesc}
                onChange={(e) => setDocDesc(e.target.value)}
              />
            </div>
            <div className='flex justify-end space-x-4'>
              <button
                className='px-4 py-2 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white rounded-lg shadow-lg'
                onClick={handleUseTemplate}
              >
                Done
              </button>
              <button
                className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 rounded-lg shadow-lg'
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TemplateTabComponent
