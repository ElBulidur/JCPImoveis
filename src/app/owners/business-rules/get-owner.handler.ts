import { OwnerRepository } from '../repositories/owner.repository';
import { Injectable } from '@angular/core';
import { IOwner } from '../models/iowner';

@Injectable({
  providedIn: 'root',
})
export class GetOwnerHandler {
  constructor(private repository: OwnerRepository) {}

  async execute(id: number): Promise<IOwner | undefined> {
    try {
      if (id) {
        const response = await this.repository.getById(id);
        return response;
      } else {
        throw new Error('O identificador do proprietário não é valido.');
      }
    } catch (error) {
      alert('Erro ao buscar um proprietário');
      return undefined;
    }
  }
}
