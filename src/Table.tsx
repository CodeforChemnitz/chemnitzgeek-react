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
    const columnList = ([
      ['localName', 'Name'],
      ['rating', 'Bewertung'],
      ['minAge', 'Alter'],
      ['minPlayers', 'Spieleranzahl'],
      ['weight', 'Gewicht'],
      ['yearPublished', 'Jahr'],
    ] as [column, string][]).map((col, index) => {
      let symbol = '';
      if (col[0] === this.state.column) {
        symbol = (this.state.ascending) ? '▲' : '▼';
      }
      return <th><a href="#" onClick={this.handleSortChange(col[0])}>{col[1]}{symbol}</a></th>;
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
