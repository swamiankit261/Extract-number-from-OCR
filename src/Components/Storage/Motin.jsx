import { motion } from "framer-motion"
import { useMotionValue } from 'framer-motion'

function Motin() {
    let mousex = useMotionValue(0);
    console.log(mousex.get());
    return (
        <>
            <div onMouseMove={(e) => { mousex.set(e.pageX) }} className='w-100 bg-secondary mx-auto mt-5 d-flex'>
                <motion.div style={{ width: `${mousex.get()}px` }} className='circle-div bg-success rounded-circle m-1' />
                {/* <motion.div animate={{ x: 0 }} /> */}
                {/* <div style={{ width: `${mouse}px` }} className='bg-success rounded-circle m-1'>h1</div> */}
                {/* {[...Array(5).keys()].map((index) => (
                    <div style={{ width: `${mouse}` }} key={index} className='circle-div bg-success rounded-circle m-1'></div>
                ))} */}
            </div>
        </>
    )
}

export default Motin