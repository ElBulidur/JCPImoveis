import { OwnerRepository } from '../repositories/owner.repository';
import { Injectable } from '@angular/core';
import { IOwner } from '../models/iowner';

@Injectable({
  providedIn: 'root',
})
export class UpdateOwnerHandler {
  constructor(private repository: OwnerRepository) {}

  async execute(owner: IOwner): Promise<IOwner | undefined> {
    try {
      const response = await this.repository.update(owner);
      alert('Proprietário alterado com sucesso.');

      return response;
    } catch (error) {
      alert('Erro ao alterar o proprietário');
      return undefined;
    }
  }
}
