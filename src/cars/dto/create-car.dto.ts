import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  //DTO deben ser readonly

  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
