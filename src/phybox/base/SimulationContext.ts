export default class SimulationContext {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        let context = canvas.getContext('2d');

        if(!context) {
            throw new TypeError('PhyBox canvas context not found!');
        }

        this.canvas = canvas;
        this.ctx = context;
    }

    start() {   

    }

    update(deltaTime: number) {
        
    }

    stop() {

    }
}