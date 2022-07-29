import React from 'react'
import { Space, Table, Tag } from 'antd';
const ShowData = ({columns,data}) => {
  return (
    <div style={{marginTop:"140px"}}>

<Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ShowData