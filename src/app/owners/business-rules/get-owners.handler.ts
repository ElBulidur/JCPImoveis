import { OwnerRepository } from '../repositories/owner.repository';
import { Injectable } from '@angular/core';
import { IOwner } from '../models/iowner';

@Injectable({
  providedIn: 'root',
})
export class GetOwnersHandler {
  constructor(private repository: OwnerRepository) {}

  async execute(): Promise<IOwner[] | undefined> {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      alert('Erro ao buscar todos proprietários');
      return undefined;
    }
  }
}
