import * as React from 'react';

export default function TableRow(props: TableRowProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.rating}</td>
      <td>{props.playerCount[0]} – {props.playerCount[1]}</td>
      <td>{props.minAge}+</td>
      <td>{props.weight}</td>
      <td>{props.year}</td>
      <td>{props.sources.join(', ')}</td>
    </tr>
  );
}

interface TableRowProps extends Game {
}

export interface Game {
  name: string;
  rating: number;
  playerCount: [number, number];
  minAge: number;
  weight: number;
  year: number;
  sources: number[];
  bggId: number;
}
