import { PropertyRepository } from '../repositories/property.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeletePropertyHandler {
  constructor(private repository: PropertyRepository) {}

  async execute(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
      alert('Propriedade excluída com sucesso.');
    } catch (error) {
      alert('Erro ao excluir a Propriedade');
      return undefined;
    }
  }
}
