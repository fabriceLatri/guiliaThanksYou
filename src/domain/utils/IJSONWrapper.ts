import {ClassTransformOptions} from '@domain/interfaces';
import {ClassConstructor} from '@domain/types';

export interface IJSONWrapper {
  instanceToPlain<T>(
    object: T | T[],
    options?: ClassTransformOptions,
  ): Record<string, any> | Record<string, any>[];
  plainToInstance<T, V>(
    cls: ClassConstructor<T>,
    plain: V | V[],
    options?: ClassTransformOptions,
  ): T | T[];
}
