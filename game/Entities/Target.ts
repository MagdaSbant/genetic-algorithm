import P5 from 'p5';

import { Blobby } from '../ Classes/Blobby';

export default class Target extends Blobby {
  constructor(p5: P5) {
    super(
      p5,
      40,
      200,
      75,
      p5.createVector(1000, 1000, 1000),
      p5.createVector(0.1, 0.7, 0.007),
      p5.createVector(p5.windowWidth / 2, 100),
      [255, 186, 8, 90]
    );
  }
}
