import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Stack direction='row' justifyContent="center">
            <InfinitySpin color="gray"/>
        </Stack>
    )
}

export default Loader