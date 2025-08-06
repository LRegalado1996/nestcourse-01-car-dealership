import { IsString } from 'class-validator';

export class CreateCarDto {
  //DTO deben ser readonly

  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
