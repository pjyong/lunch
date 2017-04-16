import React from 'react'
import WeUI from 'react-weui'
const {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    Button,
    Link,
    FooterText,
    Flex,
    FlexItem,
    Cells,
    Cell,
    CellBody,
    CellFooter
} = WeUI

const ChooseCar = () => {
    return (
        
                <Cells>
                            <Cell href="javascript:;" access>
                                <CellBody>
                                    奥迪
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell access>
                                <CellBody>
                                    宝马
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>

    )
}

export default ChooseCar
