import React from 'react'
import WeUI from 'react-weui'
const {MediaBox,MediaBoxBody,MediaBoxTitle,MediaBoxDescription} = WeUI

const Department = ({ ID,Title,Content,CreateTime,AnswerContent }) => {
    return (
        <MediaBox type="appmsg" href="#">
            <MediaBoxBody>
                <MediaBoxTitle>{Title}</MediaBoxTitle>
                <MediaBoxDescription>
                    {AnswerContent}
                </MediaBoxDescription>
            </MediaBoxBody>
        </MediaBox>
    )
}

export default Department
