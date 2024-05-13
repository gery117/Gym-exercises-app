import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';


const SimilarExercises = ({targetMuscleExercises}) => {

  window.scrollTo({ top: 100, behavior: "smooth"})
  return (
    // <Box sx={{mt:{lg: '100px', xs:'0'}}}>
    //   <Typography mb = {5} variant ="h3">
    //     Exercises that target the same muscle group
    //   </Typography>
    //   <Stack direction="row" sx={{p:'2', position: 'relative'}}>
    //     {targetMuscleExercises.length ?
    //       <HorizontalScrollbar data={targetMuscleExercises}/>
    //       : <Loader/>
    //     }
    //   </Stack>

    //   <Typography mb = {5} variant ="h3">
    //     Exercises that use the same equipment
    //   </Typography>
    //   <Stack direction="row" sx={{p:'2', position: 'relative'}}>
    //     {equipmentExercises.length ?
    //       <HorizontalScrollbar data={equipmentExercises}/>
    //       : <Loader/>
    //     }
    //   </Stack>
    // </Box>
    <Stack  mt="37px" justifyContent="center" p="20px" >
      <Typography mb = {5} variant ="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack sx={{position: 'relative', mt:{lg: '100px', xs:'0'}  }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>
        }
      </Stack >
      
    </Stack>

    
  )
}

export default SimilarExercises