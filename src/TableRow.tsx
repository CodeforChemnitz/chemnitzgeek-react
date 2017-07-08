import * as React from 'react';
import {Set} from 'immutable';

export default function TableRow(props: TableRowProps) {
  const playerCount = (props.minPlayers === props.maxPlayers)
    ? props.minPlayers
    : `${props.minPlayers} – ${props.maxPlayers}`;

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.rating}</td>
      <td>{playerCount}</td>
      <td>{props.minAge}+</td>
      <td>{props.weight}</td>
      <td>{props.yearPublished}</td>
      <td>{props.sources.join(', ')}</td>
    </tr>
  );
}

interface TableRowProps extends Game {
}

export interface Game {
  bggID: number;
  name: string;
  yearPublished: number;
  minAge: number;
  minPlayers: number;
  maxPlayers: number;
  rating: number;
  weight: number;
  localName: number;

  sources: Set<number>;
}
