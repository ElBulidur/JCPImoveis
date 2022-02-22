import { PropertyRepository } from '../repositories/property.repository';
import { Injectable } from '@angular/core';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})

export class CreatePropertyHandler {
  constructor(private repository: PropertyRepository) {}

  async execute(property: IProperty): Promise<IProperty | undefined> {
    try {
      const response = await this.repository.create(property);
      alert('Propriedade criada com sucesso.');

      return response;
    } catch (error) {
      alert('Erro ao criar a propriedade');
      return undefined;
    }
  }
}
