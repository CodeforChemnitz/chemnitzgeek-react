import * as React from 'react';
import TableRow, {Game} from './TableRow';

export default function Table(props: TableProps) {
  const rowList = props.games.map((game, index) => (
    <TableRow
      key={index}
      game={game}
    />
  ));

  return (
    <div>
      <table>
        <thead>
          <td>Name</td>
          <td>Rating</td>
          <td>Players</td>
          <td>Age</td>
          <td>Weight</td>
          <td>Year</td>
          <td>Source</td>
        </thead>
        <tbody>{rowList}</tbody>
      </table>
    </div>
  );
}

interface TableProps {
  games: Game[];
}
