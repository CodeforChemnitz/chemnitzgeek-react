import * as React from 'react';
import Form from './Form';
import Table from './Table';
import {Item} from './CheckBox';
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
      minAge: 0,
      sources: [
        'Spielenacht 2016',
        'Stadtbibliothek',
        'Studentenwerk',
        'Würfeltürmer',
        'Kaffeesatz',
      ].map((item, index) => ({id: index, name: item, checked: true})),
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handlePlayerCountChange = this.handlePlayerCountChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleMinAgeChange = this.handleMinAgeChange.bind(this);
    this.handleSourcesChange = this.handleSourcesChange.bind(this);
  }

  render() {
    return (
      <div className="row">
        <Form
          searchTerm={this.state.searchTerm}
          playerCount={this.state.playerCount}
          rating={this.state.rating}
          weight={this.state.weight}
          minAge={this.state.minAge}
          sources={this.state.sources}
          onSearchTermChange={this.handleSearchTermChange}
          onPlayerCountChange={this.handlePlayerCountChange}
          onRatingChange={this.handleRatingChange}
          onWeightChange={this.handleWeightChange}
          onMinAgeChange={this.handleMinAgeChange}
          onSourcesChange={this.handleSourcesChange}
        />
        <Table {...this.state}/>
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

  handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'max') {
      this.setState({
        rating: [this.state.rating[0], Number(event.target.value)]
      });
    } else {
      this.setState({
        rating: [Number(event.target.value), this.state.rating[1]]
      });
    }
  }

  handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'max') {
      this.setState({
        weight: [this.state.weight[0], Number(event.target.value)]
      });
    } else {
      this.setState({
        weight: [Number(event.target.value), this.state.weight[1]]
      });
    }
  }

  handleMinAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      minAge: Number(event.target.value),
    });
  }

  handleSourcesChange(sourceId: number) {
    this.setState((prevState) => {
      const i = prevState.sources.findIndex((item) => item.id === sourceId);
      const sources = prevState.sources.slice();
      sources[i].checked = !sources[i].checked;

      return {sources: sources};
    });
  }
}

interface AppProps {}

export interface AppState extends FormState {
  games: Game[];
}

export interface FormState {
  searchTerm: string;
  playerCount: number;
  rating: [number, number];
  weight: [number, number];
  minAge: number;
  sources: Item[];
}
