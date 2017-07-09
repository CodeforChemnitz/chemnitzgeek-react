import * as React from 'react';
import TableRow /*, {Game}*/ from './TableRow';
import {AppState} from './App';

export default class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      sortKey: 'localName',
      sortAsc: 1,
    };
  }

  render() {
    const rowList = this.props.games
      .sort((a, b) => {
        const valA = a[this.state.sortKey];
        const valB = b[this.state.sortKey];
        let sortInfo: number;
        if (this.state.sortKey === 'localName') {
          sortInfo = String(valA).localeCompare(String(valB));
        } else {
          sortInfo = Math.sign(Number(valA) - Number(valB));
        }
        return sortInfo * this.state.sortAsc;
      })
      .map((game, index) => <TableRow key={index} {...game}/>);

    return (
      <div className="col-sm-9">
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Bewertung</th>
              <th>Spieleranzahl</th>
              <th>Alter</th>
              <th>Gewicht</th>
              <th>Jahr</th>
              <th>Quelle</th>
            </tr>
          </thead>
          <tbody>{rowList}</tbody>
        </table>
      </div>
    );
  }
}

interface TableProps extends AppState {
}

interface TableState {
  sortKey: 'localName'
    | 'rating'
    | 'minAge'
    | 'minPlayers'
    | 'weight'
    | 'yearPublished';
  sortAsc: 1 | -1;
}
