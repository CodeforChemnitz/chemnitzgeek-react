import * as React from 'react';
import Form from './Form';
import Table from './Table';
import {Game} from './TableRow';

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      games: [],
      searchTerm: '',
      playerCount: 0,
      rating: [1, 10],
      weight: [1, 5],
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
    this.handleSpieleNacht2016Change = this.handleSpieleNacht2016Change.bind(this);
    this.handleStadtBibliothekChange = this.handleStadtBibliothekChange.bind(this);
    this.handleWuerfelTuermerChange = this.handleWuerfelTuermerChange.bind(this);
    this.handleKaffeeSatzChange = this.handleKaffeeSatzChange.bind(this);
  }

  render() {
    return (
      <div>
        <Form
          searchTerm={this.state.searchTerm}
          playerCount={this.state.playerCount}
          rating={this.state.rating}
          weight={this.state.weight}
          maxAge={this.state.maxAge}
          spieleNacht2016={this.state.spieleNacht2016}
          stadtBibliothek={this.state.stadtBibliothek}
          wuerfelTuermer={this.state.wuerfelTuermer}
          kaffeeSatz={this.state.kaffeeSatz}
          onSearchTermChange={this.handleSearchTermChange}
          onPlayerCountChange={this.handlePlayerCountChange}
          onRatingChange={this.handleRatingChange}
          onWeightChange={this.handleWeightChange}
          onMaxAgeChange={this.handleMaxAgeChange}
          onSpieleNacht2016Change={this.handleSpieleNacht2016Change}
          onStadtBibliothekChange={this.handleStadtBibliothekChange}
          onWuerfelTuermerChange={this.handleWuerfelTuermerChange}
          onKaffeeSatzChange={this.handleKaffeeSatzChange}
        />
        <Table games={this.state.games}/>
      </div>
    );
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

  handleSpieleNacht2016Change(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      spieleNacht2016: Boolean(event.target.checked),
    });
  }

  handleStadtBibliothekChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      stadtBibliothek: Boolean(event.target.checked),
    });
  }

  handleWuerfelTuermerChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      wuerfelTuermer: Boolean(event.target.checked),
    });
  }

  handleKaffeeSatzChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      kaffeeSatz: Boolean(event.target.checked),
    });
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
