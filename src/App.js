import React, { useState } from 'react'
import SourceUploadComponent from './components/SourceUploadComponent'
import MarkdownEditor from './components/MarkdownEditor'
import TemplateTabComponent from './components/TemplateTabComponent'

const DataToMarkdown = () => {
  const [data, setData] = useState('')
  const [docConfig, setDocConfig] = useState('')

  const handleDataLoaded = (loadedData) => {
    setData(loadedData)
  }

  const handleTemplateSelected = (currDoc) => {
    setDocConfig(currDoc)
  }

  return (
    <div>
      {!data && !docConfig && (
        <SourceUploadComponent onDataLoaded={handleDataLoaded} />
      )}
      {data && !docConfig && (
        <TemplateTabComponent onTemplateSelected={handleTemplateSelected} />
      )}
      {data && docConfig && (
        <MarkdownEditor data={data} docConfig={docConfig} />
      )}
    </div>
  )
}

export default DataToMarkdown
