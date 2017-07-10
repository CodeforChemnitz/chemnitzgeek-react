import * as React from 'react';
import Form from './Form';
import Table from './Table';
import {Item} from './CheckBox';
import {Game} from './TableRow';
import {Set} from 'immutable';

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const baseUrl = 'https://rawcdn.githack.com/CodeforChemnitz/ChemnitzGeek/master/html/gameData.';
    this.state = {
      games: [],
      searchTerm: '',
      playerCount: 0,
      rating: [1, 10],
      weight: [1, 5],
      minAge: 99,
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

  handleSearchTermChange = (searchTerm: string) => this.setState({searchTerm});

  handlePlayerCountChange = (playerCount: number) => this.setState({playerCount});

  handleRatingChange = (rating: [number, number]) => this.setState({rating});

  handleWeightChange = (weight: [number, number]) => this.setState({weight});

  handleMinAgeChange = (minAge: number) => this.setState({minAge});

  handleSourcesChange = (sources: Item[]) => this.setState({sources});
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
