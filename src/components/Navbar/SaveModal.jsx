import React from 'react'
import { H4 } from '../Common/Typography'
import { Box, Button, Overlay } from '../Style/Styled'

export default function SaveModal(props) {

    return (
        <Overlay>
            <Box>
                <H4>Saved succes</H4>
                <p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
                <Button >Continue</Button>
            </Box>
        </Overlay>
    )

}
