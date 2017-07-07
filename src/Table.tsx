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
    <div className="col-sm-9">
      <table className="scrollable striped">
        <thead>
          <th>Name</th>
          <th>Rating</th>
          <th>Players</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Year</th>
          <th>Source</th>
        </thead>
        <tbody>{rowList}</tbody>
      </table>
    </div>
  );
}

interface TableProps {
  games: Game[];
}
