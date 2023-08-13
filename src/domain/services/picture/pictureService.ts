import { Measure } from '@domain/decorators/measure';
import { CatchAll } from '@domain/decorators/tryCatch';
import { IPicture } from '@domain/models/entities/Picture';
import { IPictureService } from '@domain/models/interface';
import { IPictureRepository } from '@domain/repositories';

export class PictureService implements IPictureService {
  constructor(private readonly pictureRepository: IPictureRepository) {}

  @Measure()
  @CatchAll((error, ctx) => {
    console.error(`[PictureService]: Error occured: ${error.message} for this context ${ctx.constructor.name}`);
  })
  async getPictures(): Promise<IPicture[]> {
    return await this.pictureRepository.getPictures();
  }
}
