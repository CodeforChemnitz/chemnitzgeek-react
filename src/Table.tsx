import * as React from 'react';
import TableRow /*, {Game}*/ from './TableRow';
import {AppState} from './App';

export default class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      column: 'localName',
      ascending: true,
    };
  }

  render() {
    const columns: {id: column, name: string}[] = [
      {id: 'localName', name: 'Name'},
      {id: 'rating', name: 'Bewertung'},
      {id: 'minAge', name: 'Alter'},
      {id: 'minPlayers', name: 'Spieleranzahl'},
      {id: 'weight', name: 'Gewicht'},
      {id: 'yearPublished', name: 'Jahr'},
    ];
    const columnList = columns.map((col, index) => {
      let symbol = '';
      if (col.id === this.state.column) {
        symbol = (this.state.ascending) ? '▲' : '▼';
      }
      return <th><a href="#" onClick={this.handleSortChange(col.id)}>{col.name}{symbol}</a></th>;
    });

    const rowList = this.props.games
      .sort((a, b) => {
        const valA = a[this.state.column];
        const valB = b[this.state.column];
        let sortInfo: number;
        if (this.state.column === 'localName') {
          sortInfo = String(valA).localeCompare(String(valB));
        } else {
          sortInfo = Math.sign(Number(valA) - Number(valB));
        }
        return (this.state.ascending) ? sortInfo : -sortInfo;
      })
      .map((game, index) => <TableRow key={index} {...game}/>);

    return (
      <div className="col-sm-9">
        <table className="striped">
          <thead>
            <tr>
              {columnList}
              <th>Quelle</th>
            </tr>
          </thead>
          <tbody>{rowList}</tbody>
        </table>
      </div>
    );
  }

  handleSortChange = (column: column) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState((prevState) => (
      (prevState.column === column)
        ? {ascending: !prevState.ascending}
        : {column, ascending: true}
    ));
  }
}

interface TableProps extends AppState {
}

interface TableState {
  column: column;
  ascending: boolean;
}

type column = 'localName'
    | 'rating'
    | 'minAge'
    | 'minPlayers'
    | 'weight'
    | 'yearPublished';
