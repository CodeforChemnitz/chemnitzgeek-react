import * as React from 'react';
import TableRow from './TableRow';
import {AppState} from './App';

export default class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    const rowList = this.props.games.map((game, index) => (
      <TableRow key={index} {...game}/>
    ));

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

}
