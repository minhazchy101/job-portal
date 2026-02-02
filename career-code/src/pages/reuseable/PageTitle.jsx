import React from 'react'

const PageTitle = ({title , subTitle}) => {
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p className="text-lg">{subTitle}</p>
    </div>
  )
}

export default PageTitle
