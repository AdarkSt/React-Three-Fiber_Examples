import { Color, ThreeEvent } from "@react-three/fiber"
import { Euler, Vector3 } from "three"

type axis = 'x' | 'y' | 'z'
type rotation = {
    rotationState: true | false,
    axis: axis | Array<axis>,
}

export type BoxProps = {
    position?: Vector3,
    rotation?: Euler,
    color?: Color,
    geometryArgs?: [width:number, height:number, depth:number],
    hoveredColor?: Color,
    activeScale?: number
    rotate?: rotation,
    onClick?: (event: ThreeEvent<MouseEvent>) => void,
    onPointerOver?: (event: ThreeEvent<MouseEvent>) => void,
    onPointerOut?: (event: ThreeEvent<MouseEvent>) => void,
}