import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})

export class PropertyRepository {
  constructor(private httpClient: HttpClient) {}

  create(property: IProperty): Promise<IProperty | undefined> {
    return this.httpClient
      .post<IProperty>(`${environment.api}/properties`, property)
      .toPromise();
  }

  update(entity: IProperty): Promise<IProperty | undefined> {
    const { id, ...data } = entity;
    return this.httpClient
      .put<IProperty>(`${environment.api}/properties/${id}`, data)
      .toPromise();
  }

  getById(id: number): Promise<IProperty | undefined> {
    return this.httpClient
      .get<IProperty>(`${environment.api}/properties/${id}`)
      .toPromise();
  }

  getAll(): Promise<IProperty[] | undefined> {
    return this.httpClient
      .get<IProperty[]>(`${environment.api}/properties`)
      .toPromise();
  }

  async delete(id: number): Promise<void> {
    await this.httpClient.delete(`${environment.api}/properties/${id}`).toPromise();
    return;
  }
}
