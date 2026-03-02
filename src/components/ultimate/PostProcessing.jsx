import { EffectComposer, Bloom, DepthOfField, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export function PostProcessing() {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0.85}
                luminanceSmoothing={0.025}
                intensity={0.4}
                mipmapBlur
            />
            <DepthOfField
                focusDistance={0.02}
                focalLength={0.5}
                bokehScale={3}
            />
            <ChromaticAberration
                blendFunction={BlendFunction.NORMAL}
                offset={[0.0004, 0.0004]}
            />
        </EffectComposer>
    )
}
