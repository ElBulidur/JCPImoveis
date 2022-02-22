import { OwnerRepository } from '../repositories/owner.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteOwnerHandler {
  constructor(private repository: OwnerRepository) {}

  async execute(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
      alert('Propriet1ario excluído com sucesso.');
    } catch (error) {
      alert('Erro ao excluir o proprietário');
      return undefined;
    }
  }
}
