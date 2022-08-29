import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { CameraControllerProps } from "./CameraControllerProps"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const CameraController = (props: CameraControllerProps): null => {
    const {minDistance = 0, maxDistance = Infinity} = props
    const {camera, gl, invalidate} = useThree()
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement)
        controls.addEventListener('change', () => {
            invalidate()
        })
        controls.minDistance = minDistance
        controls.maxDistance = maxDistance
        return () => {
            controls.dispose()
        }
    }, [gl, camera, minDistance, maxDistance, invalidate])

    return null
}