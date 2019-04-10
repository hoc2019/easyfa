import Player from './player';

/**
 * @property {number} currFrameNumber
 * @property {Frame} currFrame
 * @property {boolean} paused
 * @property {boolean} ended
 */
export class APNG {
    width = 0;
    height = 0;
    numPlays = 0;
    playTime = 0;
    frames: any[] = [];

    /**
     *
     * @return {Promise.<*>}
     */
    createImages() {
        return Promise.all(this.frames.map(f => f.createImage()));
    }

    /**
     *
     * @param {CanvasRenderingContext2D} context
     * @param {boolean} autoPlay
     * @return {Promise.<Player>}
     */
    getPlayer(
        context: CanvasRenderingContext2D,
        autoPlay = false
    ): Promise<Player> {
        return this.createImages().then(
            () => new Player(this, context, autoPlay)
        );
    }
}

export class Frame {
    left = 0;
    top = 0;
    width = 0;
    height = 0;
    delay = 0;
    disposeOp = 0;
    blendOp = 0;
    dataParts: Uint8Array[];
    imageData: Blob = null;
    imageElement: HTMLImageElement = null;

    createImage() {
        if (this.imageElement) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(this.imageData);
            this.imageElement = document.createElement('img');
            this.imageElement.onload = () => {
                URL.revokeObjectURL(url);
                resolve();
            };
            this.imageElement.onerror = () => {
                URL.revokeObjectURL(url);
                this.imageElement = null;
                reject(new Error('Image creation error'));
            };
            this.imageElement.src = url;
        });
    }
}
