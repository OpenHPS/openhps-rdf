import type { ActorInitQueryBase } from '@comunica/actor-init-query';

export * from './index.minimal';
export * from './index.vocab';
export const DefaultEngine: ActorInitQueryBase = require('./service/engine-default'); // eslint-disable-line
