
export interface Transport {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
    stop(): void;
}
