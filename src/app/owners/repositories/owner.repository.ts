import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOwner } from '../models/iowner';

@Injectable({
  providedIn: 'root',
})

export class OwnerRepository {
  constructor(private httpClient: HttpClient) {}

  create(owner: IOwner): Promise<IOwner | undefined> {
    return this.httpClient
      .post<IOwner>(`${environment.api}/owners`, owner)
      .toPromise();
  }

  update(entity: IOwner): Promise<IOwner | undefined> {
    const { id, ...data } = entity;
    return this.httpClient
      .put<IOwner>(`${environment.api}/owners/${id}`, data)
      .toPromise();
  }

  getById(id: number): Promise<IOwner | undefined> {
    return this.httpClient
      .get<IOwner>(`${environment.api}/owners/${id}`)
      .toPromise();
  }

  getAll(): Promise<IOwner[] | undefined> {
    return this.httpClient
      .get<IOwner[]>(`${environment.api}/owners/`)
      .toPromise();
  }

  async delete(id: number): Promise<void> {
    await this.httpClient.delete(`${environment.api}/owners/${id}`).toPromise();
    return;
  }
}
