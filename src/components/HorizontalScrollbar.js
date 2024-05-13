import React, {useRef, useState} from 'react'
import { Box, Typography, Stack } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


// import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';



// const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);

//     return (
//         <Typography onClick={() => scrollPrev()} className="right-arrow">
//             <img src={LeftArrowIcon} alt="right-arrow" />
//         </Typography>
//     );
// };

// const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);

//     return (
//         <Typography onClick={() => scrollNext()} className="left-arrow">
//             <img src={RightArrowIcon} alt="right-arrow" />
//         </Typography>
//     );
// };


// const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
//     return (
//         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//             {data.map((item)=> (
//                 <Box 
//                     key= {item.id || item}
//                     itemID= {item.id || item}
//                     title= {item.id || item}
//                     m= "0 40px"
//                 >
//                     {isBodyParts ? 
//                     <BodyPart
//                         item = {item}
//                         bodyPart= {bodyPart}
//                         setBodyPart = {setBodyPart}
//                     />
//                         :<ExerciseCard exercise={item}/>
//                     }
//                 </Box>
//                 )
//             )}
//         </ScrollMenu>
//     )
// }

// const slideLeft =() => {
//     let slider = document.getElementById('slider');
//     slider.scrollLeft = slider.scrollLeft - 500;
// }

// const slideRight =() => {
//     let slider = document.getElementById('slider');
//     slider.scrollLeft = slider.scrollLeft + 500;
// }

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
    
    const [scrollPosition, setScrollPosition] = useState(0)
    const containerRef = useRef()

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;

        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft= newScrollPosition;
    }


    return (
        <div className='relative flex items-center'>
            <FaArrowLeft className=' size-10 opacity-50 cursor-pointer hover:opacity-100' onClick={()=>{handleScroll(- 700)}}/>
            <div id='slider' ref={containerRef} className=' w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-8'>
                <Stack direction='row' >
                    {data.map((item)=> (
                        <Box 
                            key= {item.id || item}
                            itemID= {item.id || item}
                            title= {item.id || item}
                            m= "0 40px"
                            className='inline-block p-2'
                        >
                            {isBodyParts ? 
                            <BodyPart
                                item = {item}
                                bodyPart= {bodyPart}
                                setBodyPart = {setBodyPart}
                            />
                                :<ExerciseCard exercise={item}/>
                            }
                        </Box>
                        )
                    )}
                </Stack>
            </div>
            <FaArrowRight className='size-10 opacity-50 cursor-pointer hover:opacity-100' onClick={()=>{handleScroll(+ 700)}}/>
        </div>               
    )
}

export default HorizontalScrollbar