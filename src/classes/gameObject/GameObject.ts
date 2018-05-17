import { GameObjectType, Lock, Price } from '../baseClasses';
import IGameObjectTemplate from "./IGameObjectTemplate";
import IGameObjectState from './IGameObjectState';
import IBuyable from '../IBuyable';

export default abstract class GameObject implements IGameObjectTemplate, IGameObjectState, IBuyable {
    id: string;
    type: GameObjectType;
    name: string;
    desc: string;
    rawCost: Price;
    buyVerb: string;

    locks: Lock[];

    constructor(template: IGameObjectTemplate, state: IGameObjectState) {
        this.id = template.id;
        this.type = template.type;
        this.name = template.name;
        this.desc = template.desc;
        this.rawCost = template.rawCost;
        this.buyVerb = template.buyVerb;

        this.locks = state.locks;
    }

    abstract save(): IGameObjectState;
    abstract onBuy: (() => void)[];
    abstract buy(): void;
    abstract currentPrice: Price;
}