<script lang="ts">
    import { onMount } from 'svelte'
    import { SimulationContext } from '../../lib/phybox-core/src/index'

    let canvas: HTMLCanvasElement;
    let simContext : SimulationContext;

    onMount(() => {
        simContext = new SimulationContext(canvas);

        var lastTime: number;

        requestAnimationFrame(simLoop);

        function simLoop(now: number) {
            requestAnimationFrame(simLoop);

            if (!lastTime) { 
                lastTime = now;
            }

            var deltaTime = now - lastTime;
            
            simContext.update(deltaTime);

            lastTime = now;
        }
    });
</script>

<canvas 
    id='phybox'
    bind:this={canvas}
>

</canvas>

<style>

</style>