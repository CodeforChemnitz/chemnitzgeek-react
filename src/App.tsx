import {Set} from 'immutable';
import * as React from 'react';
import {Item} from './CheckBox';
import Form from './Form';
import Table from './Table';
import {Game, GameFromSource, sourceID} from './TableRow';

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const baseUrl = 'https://rawcdn.githack.com/CodeforChemnitz/ChemnitzGeek/master/html/gameData.';
    this.state = {
      games: [],
      hasLoaded: false,
      searchTerm: '',
      playerCount: 0,
      rating: [1, 10],
      weight: [1, 5],
      minAge: 99,
      sources: ([
        ['Spielenacht 2016', 'SN16', '#336', 'spielenacht2016.json'],
        ['Stadtbibliothek', 'Bibl', '#366', 'bibliothek.json'],
        ['Studentenwerk', 'StuWe', '#363', 'swcz.json'],
        ['Würfeltürmer', 'WüTü', '#663', 'tuermer.json'],
        ['Kaffeesatz', 'Kffz', '#633', 'kaffeesatz.json'],
      ] as [string, sourceID, string][]).map((item) => (
        {id: item[1], name: item[0], checked: true, url: baseUrl + item[3], bgColor: item[2]}
      )),
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

  async componentDidMount() {
    try {
      const games: Game[] = [];
      const sources = this.state.sources.map(async (source) => {
        const response = await fetch(source.url);
        const data: GameFromSource[] = await response.json();
        data.forEach((game) => {
          const i = games.findIndex((elem) => elem.bggID === game.bggID);
          if (i === -1) {
            games.push({...game, sourceList: Set.of(source.id)});
          } else {
            games[i].sourceList = games[i].sourceList.add(source.id).sort().toSet();
          }
        });
      });
      for (const gamesFromSource of sources) {
        await gamesFromSource;
      }
      this.setState({games, hasLoaded: true});
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
    }
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
  hasLoaded: boolean;
}

export interface FormState {
  searchTerm: string;
  playerCount: number;
  rating: [number, number];
  weight: [number, number];
  minAge: number;
  sources: Item[];
}
