import {Map, Set} from 'immutable';
import * as React from 'react';
import {Item} from './CheckBox';

export default class TableRow extends React.PureComponent<TableRowProps, {}> {
  render() {
    const props = this.props;
    const playerCount = (props.minPlayers === props.maxPlayers)
      ? props.minPlayers
      : `${props.minPlayers} – ${props.maxPlayers}`;
    const rating = props.rating / 10 * 1000;
    const weight = props.weight / 5 * 1000;
    const style = {textDecoration: 'none', color: '#212121'};
    const url = 'https://boardgamegeek.com/boardgame/' + props.bggID;
    const sourceInfo: Map<sourceID, Item> = Map(props.sources.map(
      (source) => ([source.id, source])
    ));
    const commonSourcesStyle = {
      color: '#eee',
      fontWeight: 'bold',
      border: '1px solid black',
      borderRadius: '3px',
      fontSize: '85%',
      padding: '2px',
      margin: '0px 1px',
      verticalAlign: 'middle',
      fontFamily: 'monospace',
    };
    const sources = props.sourceList.map((sID: sourceID) => (
      <span
        key={sID}
        title={sourceInfo.get(sID).name}
        style={Object.assign({backgroundColor: sourceInfo.get(sID).bgColor}, commonSourcesStyle)}
      >
        {sID}
      </span>
    ));

    return (
      <tr>
        <td data-label="Name">
          <a href={url} target="_blank" style={style}>{props.localName}</a>
        </td>
        <td data-label="Bewertung">
          <progress value={rating} title={String(props.rating)} max={1000}/>
        </td>
        <td data-label="Spieleranzahl">{playerCount}</td>
        <td data-label="Alter">{props.minAge}+</td>
        <td data-label="Gewicht">
          <progress value={weight} title={String(props.weight)} max={1000} className="secondary"/>
        </td>
        <td data-label="Jahr">{props.yearPublished}</td>
        <td data-label="Quelle">{sources}</td>
      </tr>
    );
  }
}

interface TableRowProps extends Game {
  sources: Item[];
}

export interface Game extends GameFromSource {
  sourceList: Set<sourceID>;
}

export type sourceID = 'SN16' | 'Bibl' | 'StuWe' | 'WüTü' | 'Kffz';

export interface GameFromSource {
  bggID: number;
  name: string;
  yearPublished: number;
  minAge: number;
  minPlayers: number;
  maxPlayers: number;
  rating: number;
  weight: number;
  localName: string;
}
