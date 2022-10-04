import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from 'typegoose'
export interface RoomsModel extends Base {}
export class RoomsModel extends TimeStamps {}
