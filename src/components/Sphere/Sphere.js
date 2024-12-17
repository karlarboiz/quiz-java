import React from 'react'
const Sphere=()=> {
  return (
    <mesh>
        <sphereBufferGeometry attach='geometry' args={[2,32]} />
    </mesh>
  )
}

export default Sphere;