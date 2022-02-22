import { PropertyRepository } from '../repositories/property.repository';
import { Injectable } from '@angular/core';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})
export class GetPropertyHandler {
  constructor(private repository: PropertyRepository) {}

  async execute(id: number): Promise<IProperty | undefined> {
    try {
      if (id) {
        const response = await this.repository.getById(id);
        return response;
      } else {
        throw new Error('O identificador da propriedade não é valido.');
      }
    } catch (error) {
      alert('Erro ao buscar uma propriedade');
      return undefined;
    }
  }
}
