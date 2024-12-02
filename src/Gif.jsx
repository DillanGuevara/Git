import { motion, useInView } from "motion/react"
import { useRef } from "react"

const variants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: ({ index }) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: index*.1
        }
    })
}

export const Gif = ({ gif, index }) => {

    const ref = useRef(null)
    const visto = useInView(ref, {
        once: true
    })

    return (
        <motion.img
            drag
            ref={ref}
            initial="initial"
            animate={visto ? "animate" : ""}
            variants={variants}
            custom={{ index }}
            whileHover={{
                scale: 1.1
            }}
            className="gif"
            src={gif.images.original.url} 
            alt={gif.title}
        />
    )
}