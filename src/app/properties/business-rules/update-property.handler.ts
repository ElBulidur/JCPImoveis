import { PropertyRepository } from '../repositories/property.repository';
import { Injectable } from '@angular/core';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})
export class UpdatePropertyHandler {
  constructor(private repository: PropertyRepository) {}

  async execute(property: IProperty): Promise<IProperty | undefined> {
    try {
      const response = await this.repository.update(property);
      alert('Propriedade alterada com sucesso.');

      return response;
    } catch (error) {
      alert('Erro ao alterar a propriedade');
      return undefined;
    }
  }
}
