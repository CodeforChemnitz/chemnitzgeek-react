import * as React from 'react';
import Form from './Form';
import Table from './Table';
import {Item} from './CheckBox';
import {Game} from './TableRow';
import {Set} from 'immutable';

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const baseUrl = 'https://rawcdn.githack.com/CodeforChemnitz/ChemnitzGeek/master/html/gameData.';
    this.state = {
      games: [],
      searchTerm: '',
      playerCount: 0,
      rating: [1, 10],
      weight: [1, 5],
      minAge: 0,
      sources: [
        ['Spielenacht 2016', 'spielenacht2016.json'],
        ['Stadtbibliothek', 'bibliothek.json'],
        ['Studentenwerk', 'swcz.json'],
        ['Würfeltürmer', 'tuermer.json'],
        ['Kaffeesatz', 'kaffeesatz.json'],
      ].map((item, index) => ({id: index, name: item[0], checked: true, url: baseUrl + item[1]})),
    };
  }

  render() {
    const {games, ...formState} = this.state;

    return (
      <div className="row">
        <Form
          {...formState}
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

  componentDidMount() {
    this.state.sources.forEach((source) => {
      fetch(source.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState((prevState) => ({
          games: prevState.games.concat(
            json.map((i: Game) => ({...i, sources: Set.of(source.id)}))
          ),
        }));
      });
    });
  }

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({searchTerm: event.target.value}));
  }

  handlePlayerCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({playerCount: Number(event.target.value)}));
  }

  handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'max') {
      this.setState((prevState) => ({rating: [this.state.rating[0], Number(event.target.value)]}));
    } else {
      this.setState((prevState) => ({rating: [Number(event.target.value), this.state.rating[1]]}));
    }
  }

  handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'max') {
      this.setState((prevState) => ({weight: [this.state.weight[0], Number(event.target.value)]}));
    } else {
      this.setState((prevState) => ({weight: [Number(event.target.value), this.state.weight[1]]}));
    }
  }

  handleMinAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({minAge: Number(event.target.value)}));
  }

  handleSourcesChange = (sourceId: number) => {
    this.setState((prevState) => {
      const i = prevState.sources.findIndex((item) => item.id === sourceId);
      const sources = prevState.sources.slice();
      sources[i].checked = !sources[i].checked;

      return {sources};
    });
  }
}

interface AppProps {
}

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
