import {Set} from 'immutable';
import * as React from 'react';
import {AppState} from './App';
import TableRow /*, {Game}*/ from './TableRow';

export default class Table extends React.PureComponent<TableProps, TableState> {
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
      ['minPlayers', 'Spieleranzahl'],
      ['minAge', 'Alter'],
      ['weight', 'Gewicht'],
      ['yearPublished', 'Jahr'],
      ['sources', 'Quellen'],
    ] as [column, string][]).map((col, index) => {
      let symbol = '';
      if (col[0] === this.state.column) {
        symbol = (this.state.ascending) ? '▲' : '▼';
      }
      const ch = this.handleSortChange(col[0]);
      const style = {textDecoration: 'none', color: '#212121'};

      return (
      <th key={index}>
        <a href="#" onClick={ch} style={style}>{col[1]}{symbol}</a>
      </th>
      );
    });

    const rowList = this.props.games
      .filter((game) => (
        (0 === this.props.playerCount
          || game.minPlayers <= this.props.playerCount
          &&  this.props.playerCount <= game.maxPlayers)
        && this.props.rating[0] <= game.rating
        && game.rating <= this.props.rating[1]
        && this.props.weight[0] <= game.weight
        && game.weight <= this.props.weight[1]
        && game.minAge <= this.props.minAge
        && game.localName.toLocaleLowerCase().includes(this.props.searchTerm.toLocaleLowerCase())
        && !Set(game.sources)
          .intersect(this.props.sources.filter((item) => item.checked).map((item) => item.id))
          .isEmpty()
      ))
      .sort((a, b) => {
        const valA = a[this.state.column];
        const valB = b[this.state.column];
        let sortInfo: number;
        if (this.state.column === 'localName') {
          sortInfo = String(valA).localeCompare(String(valB));
        } else {
          sortInfo = (valA > valB) ? 1 : (valA < valB) ? -1 : 0;
        }
        return (this.state.ascending) ? sortInfo : -sortInfo;
      })
      .map((game) => <TableRow key={game.bggID} {...game}/>);

    return (
      <div className="col-sm-9">
        <table className="striped">
          <thead><tr>{columnList}</tr></thead>
          <tbody>{rowList}</tbody>
        </table>
      </div>
    );
  }

  handleSortChange = (newColumn: column) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState((prevState) => (
      (prevState.column === newColumn)
        ? {ascending: !prevState.ascending}
        : {column: newColumn, ascending: true}
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
    | 'yearPublished'
    | 'sources';
