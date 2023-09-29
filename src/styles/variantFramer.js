export const variantFramer = () => {
  const showGif = {
    initial : {
      opacity: 0, 
      scale: 0,
    },

    
    animate: (index) => ({
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        delay: index*.01
      }
    }),
    
    hover : {
      scale: 0.9,
      transition: {
        duration: 0.1
      },
      rotate: 1,
    }

  }

  return {
    showGif
  } 
}
