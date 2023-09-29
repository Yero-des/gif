import { motion, useInView } from "framer-motion"
import { variantFramer } from "../../styles/variantFramer"
import { useRef } from "react"

const Gif = ({id, url, title, index}) => {
  
  const { showGif } = variantFramer()
  const ref = useRef(null)
  const isView = useInView(ref, {
    once: true,
  })

  return (
    <div className="item-gif d-flex align-items-center justify-content-center" key={id}>
      <motion.img  
        drag
        ref={ref}
        initial="initial"     
        animate={isView ? "animate" : ""}
        whileHover="hover"
        variants={showGif}
        custom={index}
        src={url}
        alt={title} />
    </div>
  )
}

export const GridGifs = ({gifs}) => {

  return (
    <motion.div className="d-grid section"
      animate={{y: 20}}
      >
      {gifs.map((gif, index) => (

        <Gif
          id={gif.id}
          url={gif.images.original.url}
          title={gif.title}
          index={index}
        />

      ))}
    </motion.div>
  )
}

