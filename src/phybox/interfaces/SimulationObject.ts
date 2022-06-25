export type SimulationObject = {
    start() : void;
    update(deltaTime: number) : void;
    stop() : void;
}