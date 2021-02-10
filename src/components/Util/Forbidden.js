import { message } from 'antd'
import React from 'react'

function Forbidden() {
    return (
        <div>
            {message.error("you don't have the permission")}
        </div>
    )
}

export default Forbidden