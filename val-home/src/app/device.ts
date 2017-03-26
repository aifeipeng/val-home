import {Base} from "./base";
import {Lamp} from "./lamp";
import {Radiator} from "./radiator";
/**
 * Created by filip on 2017-03-25.
 */
export class Device extends Base implements Lamp, Radiator{
  dimmer: number;
  temp: number;
  temperature: number[];
  roomId : string;
  powered : boolean;
  powerConsumption : number;
  __v: number;
  __t: string;


}
