// import React, { useState } from 'react'
// import { Canvas } from 'react-three-fiber'
// // import { useSpring, a } from 'react-spring/three'
// import { useSpring, a } from 'react-spring'
// import { usePlane } from 'use-cannon'

// const Box = ({ position, color }) => {
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   const props = useSpring({ scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1] })
//   return (
//     <a.mesh
//       position={position}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//       scale={props.scale}>
//       <boxBufferGeometry />
//       <a.meshStandardMaterial color={hovered ? 'hotpink' : color} />
//     </a.mesh>
//   )
// }

// const MeshNetwork = () => {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0]
//   }))
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight intensity={0.8} position={[300, 300, 4000]} />
//       <mesh position={[0, 0, 0]} ref={ref}>
//         <planeBufferGeometry args={[500, 500]} />
//         <meshStandardMaterial color="#222" />
//       </mesh>
//       <Box position={[0, 0, 0]} color="lightblue" />
//       <Box position={[2, 0, 2]} color="pink" />
//       <Box position={[-2, 0, -2]} color="orange" />
//     </>
//   )
// }

// const TypingAnimation = ({ text }) => {
//   const [index, setIndex] = useState(0)
//   const props = useSpring({ left: index * 20 })
//   React.useEffect(() => {
//     const interval = setInterval(() => setIndex((index) => index + 1), 200)
//     return () => clearInterval(interval)
//   }, [])
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//       <a.div style={props} className="inline-block">
//         {text}
//       </a.div>
//     </div>
//   )
// }

// const MeshNetworkWithTypingAnimation = () => {
//   return (
//     <div className="relative h-screen">
//       <Canvas>
//         <MeshNetwork />
//       </Canvas>
//       <TypingAnimation text="Hello world!" />
//     </div>
//   )
// }

// export default MeshNetworkWithTypingAnimation
