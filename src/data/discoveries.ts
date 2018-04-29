import IDiscovery from '../classes/IDiscovery';

let discoveries: IDiscovery[] = [
  {
    id: "flour-discovery",
    type: 'discovery',
    name: "Discover flour",
    desc: "It seems that if you hit the grains with a rock, you get something more interesting...",
    locks: [],
    unlocks: 'flour',
    rawCost: [{ currency: 'wheat', amount: 100}],
    done: false,
    buyVerb: "Experiment!"
  }
];

export default discoveries;