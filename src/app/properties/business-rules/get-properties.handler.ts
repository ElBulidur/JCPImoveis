import { PropertyRepository } from '../repositories/property.repository';
import { Injectable } from '@angular/core';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})
export class GetPropertiesHandler {
  constructor(private repository: PropertyRepository) {}

  async execute(): Promise<IProperty[] | undefined> {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      alert('Erro ao buscar todas propriedades');
      return undefined;
    }
  }
}
