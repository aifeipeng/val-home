/**
 * Created by filip on 2017-03-23.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Device} from "./device";
import {House} from "./house";
import {Room} from "./room";



@Injectable()
export class ApiCallsservice {
  private baseUrl: string = 'http://46.101.241.205:3000/api/';
  constructor(private http : Http){
  }

  getHouses(): Observable<House[]> {
    let houses$ = this.http
      .get(this.baseUrl + 'houses', {headers: this.getHeaders()})
      .map(mapHouses);
    return houses$;
  }

  getRooms(): Observable<Room[]> {
  let rooms$ = this.http
    .get(this.baseUrl + 'rooms', {headers: this.getHeaders()})
    .map(mapRooms);
  return rooms$;
}

  getDevices(): Observable<Device[]> {
    let devices$ = this.http
      .get(this.baseUrl + 'devices', {headers: this.getHeaders()})
      .map(mapDevices);
    return devices$;
  }

  updateDevice(device): Observable<Response> {
    let response$ = this.http
      .put(this.baseUrl + 'devices' + device._id, JSON.stringify(device), {headers: this.getHeaders()})
    return response$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapHouses(response:Response): House[]{
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toHouse);
}

function toHouse(r: any): House{
  console.log(r._id);
  let house = <House>({
    _id: r._id,
    name: r.name,
    powerData: r.powerData,
    temperature: r.temperature
  });
  console.log('Parsed house:', house);
  return house;
}



function mapRooms(response:Response): House[]{
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toRoom);
}

function toRoom(r: any): House{
  console.log(r._id);
  let house = <House>({
    _id: r._id,
    name: r.name,
    powerData: r.powerData,
    houseId: r.houseId,
    temperature: r.temperature
  });
  console.log('Parsed house:', house);
  return house;
}

function mapDevices(response:Response): Device[]{
  return response.json().results.map(toDevice);
}

function toDevice(r: any): Device{
  let device = r.map(r => device=r);
  return device;
}
