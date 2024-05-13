import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';

const SimilarEquipmentExercises = ({ equipmentExercises }) => {
    return (
        <Stack  mt="37px" justifyContent="center" p="20px" >
            <Typography mb = {5} variant ="h3">
                Exercises that use the same equipment
            </Typography>
            <Stack sx={{position: 'relative', mt:{lg: '100px', xs:'0'}}}>
                {equipmentExercises.length ?
                <HorizontalScrollbar data={equipmentExercises}/>
                : <Loader/>
                }
            </Stack>
        </Stack>    
    )
}

export default SimilarEquipmentExercises