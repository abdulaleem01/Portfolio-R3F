import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls,PerspectiveCamera} from '@react-three/drei'



//components import
import { House1 } from './R3fcomponents/House1'
import { House2 } from './R3fcomponents/House2'
import { BrainObject } from './R3fcomponents/BrainObject'
import { Satellite } from './R3fcomponents/Satellite'


function MainRender(props) {

    // Viewport szie
    // const [WindowHeight , setWindowHeight] = useState(window.innerHeight)
    const [WindowWidth , setWindowWidth] = useState(window.innerWidth)
    
    //house1 location
    const [House1Locationx , setHouse1Locationx] = useState(2)
    const [House1Locationz , setHouse1Locationz] = useState(-2)


    //house2 location
    const [House2Locationx , setHouse2Locationx] = useState(20)
    const [House2Locationz , setHouse2Locationz] = useState(-2)
  
    //Brain
    const [BrainLocationx , setBrainLocationx] = useState(35)
    const [BrainLocationz , setBrainLocationz] = useState(0)
    const [BrainRotate , setBrainRotate] = useState(0)

   


    //sattelite rotation
    const [satteliteLocationx,setSatteliteLocationx] = useState(64)

    const [satteliteRotationz,setSatteliteRotationz] = useState(0)
    const [satelliteOpertor,setSatelliteOpertor] = useState('left')

    







    const Renderer = () =>{
        useFrame(()=>{

            setWindowWidth(window.innerWidth)
            setBrainRotate(BrainRotate+0.01)

            //sattelite movement
                //satellite rotation
                setSatteliteRotationz(satteliteRotationz+0.01)

                //satellite Location
                console.log(satteliteLocationx)
                



            //forSatellite
            if (satelliteOpertor === 'left'){
                    setSatteliteLocationx(satteliteLocationx-0.003)
                }
            if (satelliteOpertor === 'right'){
                setSatteliteLocationx(satteliteLocationx+0.003)

            }
            // if (satteliteLocationx ===  63.997){
            //     setSatteliteLocationx(satteliteLocationx-0.003)


            // }


            if (satteliteLocationx === 54.58899999999964){
                // setSatteliteLocationx(64)
                // setSatteliteLocationx(satteliteLocationx+0.1)
                setSatelliteOpertor('right')


            }

            if (satteliteLocationx === 64.20100000000001){
                // setSatteliteLocationx(64)
                // setSatteliteLocationx(satteliteLocationx+0.1)
                setSatelliteOpertor('left')

            }


            
            //forhouse1
            if (window.innerWidth <= 1000){
                //house1
                setHouse1Locationx(0)
                setHouse1Locationz(1.9)
                //house2
                setHouse2Locationx(20.9)
                setHouse2Locationz(1.9)
                //Brain
                setBrainLocationx(41.5)
                setBrainLocationz(0)


            }
            if (window.innerWidth > 1000){
                //house1
                setHouse1Locationx(2)
                setHouse1Locationz(-2)
                //house2
                setHouse2Locationx(22)
                setHouse2Locationz(-2)
                //Brain
                setBrainLocationx(43)
                setBrainLocationz(0)


            }
            
        })
    }



  return (
    <Canvas>

    {/* USEFRAME */}
    <Renderer></Renderer>

        {/* Lighting */}
        <ambientLight></ambientLight>
        {/* <directionalLight position={[62,2,50]}  color='white' localToWorld={true} intensity={10} isLight = {props.ScrollProp >= 1000 && true} ></directionalLight> */}
        <spotLight castShadow position={[40,2,5]} angle={9} isLight={props.ScrollProp >= 1000 && true} intensity = {100} color = 'white'></spotLight>
        {/* <rectAreaLight intensity={100} position = {[40 , 1,0]}></rectAreaLight> */}

        {/* Camera */}
        {/* <PerspectiveCamera  makeDefault  position={[`${props.newx}`,1,40]} far={200} near={0.1} fov={28} ></PerspectiveCamera> */}
        
        
        <PerspectiveCamera makeDefault position={[props.ScrollProp/40,0,7]} ></PerspectiveCamera>
        {/* {console.log(props.ScrollProp)} */}

        {/* <PerspectiveCamera makeDefault position={[32,0,7]}></PerspectiveCamera> */}

        {/* Objects */}
        {/* object1 */}
        <Suspense fallback={null}>
        <House1 scale = {WindowWidth/(10400)} rotation = {[0,-(Math.PI/2),0]} position = {[House1Locationx,-1,House1Locationz]}></House1>
        </Suspense>

        {/* object2 */}
        <Suspense fallback={null}>
            <House2 scale={WindowWidth/1440} position = {[House2Locationx,-0.4,House2Locationz]}></House2>
        </Suspense>

        {/* object3 */}
        <Suspense fallback={null}>
            <BrainObject  scale = {WindowWidth/(10440)} position = {[BrainLocationx,-1,BrainLocationz]} rotation = {[0,BrainRotate,0]}></BrainObject>
        </Suspense>

        {/* object4 */}
        <Suspense fallback={null}>
            <Satellite position = {[satteliteLocationx,1,-5]} rotation={[0,2,satteliteRotationz]} scale = {0.1}></Satellite>
        </Suspense>

        {/* <OrbitControls></OrbitControls> */}

    </Canvas>
  )
}

export default MainRender