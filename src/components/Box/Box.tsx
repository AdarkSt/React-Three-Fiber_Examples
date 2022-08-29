import React, { useRef, useState } from "react"
import { BufferGeometry, Color, Material, Mesh, Vector3 } from "three"
import { BoxProps } from "./BoxProps"
import "@react-three/fiber"
import { useFrame, useThree } from "@react-three/fiber"

export const Box = (props: BoxProps): React.ReactElement => {

    const mesh: React.Ref<Mesh<BufferGeometry, Material>>  = useRef(null)

    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const {
        geometryArgs = [1,1,1],
        position = new Vector3(0,0,0),
        color = new Color(0,0,0),
        hoveredColor = new Color(0.5,0.5,0.5),
        activeScale = 2,
        rotate = {rotationState: false, axis: undefined},
        onClick = ():void=>setActive(!active),
        onPointerOver = ():void=>setHovered(true),
        onPointerOut = ():void=>setHovered(false)
    } = props

    const {invalidate} = useThree()

    useFrame((state, delta): void => {
        const {rotationState, axis} = rotate
        if (mesh.current && rotationState) {
            if (!(axis instanceof Array)) {
                mesh.current.rotation[axis] += delta
            } else {
                axis.forEach(axisName => {
                    mesh.current!.rotation[axisName] += delta
                })
            }
            invalidate()
        }
    })

    return (
        <mesh 
            ref={mesh} 
            position={position}
            onClick={onClick}
            onPointerOver={onPointerOver}
            onPointerOut={onPointerOut}
            scale={active ? activeScale : 1}
        >
            <boxGeometry args={geometryArgs}/>
            <meshBasicMaterial color={hovered? hoveredColor: color} wireframe/>
        </mesh>
    )
}