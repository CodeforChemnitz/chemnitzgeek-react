import * as React from 'react';
import Input from './Input';
import Table from './Table';
import {Game} from './TableRow';

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      games: [],
      searchTerm: '',
      playerCount: 0,
      rating: [0, 100],
      weight: [0, 100],
      maxAge: 99,
      spieleNacht2016: true,
      stadtBibliothek: true,
      wuerfelTuermer: true,
      kaffeeSatz: true,
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handlePlayerCountChange = this.handlePlayerCountChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleMaxAgeChange = this.handleMaxAgeChange.bind(this);
  }

  handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handlePlayerCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      playerCount: Number(event.target.value),
    });
  }

  handleRatingChange() {
    this.setState({
    });
  }

  handleWeightChange() {
    this.setState({
    });
  }

  handleMaxAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      maxAge: Number(event.target.value),
    });
  }

  render() {
    return (
      <div>
        <Input
          searchTerm={this.state.searchTerm}
          playerCount={this.state.playerCount}
          rating={this.state.rating}
          weight={this.state.weight}
          maxAge={this.state.maxAge}
          onSearchTermChange={this.handleSearchTermChange}
          onPlayerCountChange={this.handlePlayerCountChange}
          onRatingChange={this.handleRatingChange}
          onWeightChange={this.handleWeightChange}
          onMaxAgeChange={this.handleMaxAgeChange}
        />
        <Table games={this.state.games}/>
      </div>
    );
  }
}

interface AppProps {}

interface AppState {
  games: Game[];
  searchTerm: string;
  playerCount: number;
  rating: [number, number];
  weight: [number, number];
  maxAge: number;
  spieleNacht2016: boolean;
  stadtBibliothek: boolean;
  wuerfelTuermer: boolean;
  kaffeeSatz: boolean;
}
