import { OwnerRepository } from '../repositories/owner.repository';
import { Injectable } from '@angular/core';
import { IOwner } from '../models/iowner';

@Injectable({
  providedIn: 'root',
})

export class CreateOwnerHandler {
  constructor(private repository: OwnerRepository) {}

  async execute(owner: IOwner): Promise<IOwner | undefined> {
    try {
      const response = await this.repository.create(owner);
      alert('Proprietário criado com sucesso.');

      return response;
    } catch (error) {
      alert('Erro ao criar o proprietário!');
      return undefined;
    }
  }
}
