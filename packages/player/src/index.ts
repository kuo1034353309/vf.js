export * from './Player';

const w = (window as any);

if (w.vf === undefined) {
    w.vf = {};
}
w.vf.player = this;
