import {ClassTransformOptions} from '@domain/interfaces';
import {ClassConstructor} from '@domain/types';
import {
  instanceToInstance,
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';

export abstract class JSONWrapper {
  public static stringnify<T>(
    object: T | T[],
    options?: ClassTransformOptions | undefined,
  ): Record<string, any> | Record<string, any>[] {
    return instanceToPlain(object, options);
  }
  public static parse<T, V>(
    cls: ClassConstructor<T>,
    plain: V | V[],
    options?: ClassTransformOptions | undefined,
  ): T | T[] {
    return plainToInstance(cls, plain, options);
  }

  public static instanceToInstance<T>(
    object: T | T[],
    options?: ClassTransformOptions,
  ): T | T[] {
    return instanceToInstance(object, options);
  }
}
