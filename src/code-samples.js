export const userDataInterface = `
interface Book {
  title: string,
  author: string,
  rating: number
}
`;


export const extendedUserDataInterface = `
interface BookWithArtwork extends Book {
  artworkUrl: string,
}
`;

export const typescriptButton = `
export interface Book {
  title: string,
  author: string,
  rating: number,
}

const BasicHooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  return (
    <div>
        <ul>
          {
            books.map(book => (
              <li key={book.title}>
                <b>{book.title}</b> | {book.author} | <i>Rating:</i>  {fiveStar(book.rating)}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default BasicHooks;
`;

export const oldReactComponent = `
export default class App extends React.Component {
  constructor(props: IAppProps) {
    super (props);
    this.state = { name: null };
  }
  async componentDidMount() {
    let response = await axios.get('/api/person');
    this.setState({ name: response.name })
  }
  render () {
    return (
      <h1>Hello, my name is {this.state.name}</h1>
    )
  }
}

interface IAppProps {
  name: string,
  age: number,
}

interface IAppState {
  name: string | null
}
`

export const newReactComponent = `
type Person = {
  name: string | null,
  age: number | null
}

const App: React.FC = (props: Person) => {
  const [name, setName] = useState<string | null>('');
  const getName = async () => {
    const {name} = await axios.get('api/person');
    setName(name);
  }
  useEffect(() => {
    getName();
  }, [person]);

  render () {
    return (
      <h1>Hello, my name is {name}</h1>
    )
  }
}
`

export const implicitState = `
const [count, setCount] = useState(0);
const [name, setName] = useState('Jay');
const [state, setState] = useState({ id: 1, email: 'jon@nightswatch.net'})
`

export const explicitState = `
const [count, setCount] = useState<number | null>(0);
const [name, setName] = useState<string | null>('Jay');
const [state, setState] = useState<{id: number, email: string} | undefined>({ id: 1, email: 'jon@nightswatch.net'})
`

export const useEffect = `

const useEffect = (effect:  EffectCallback, deps?: DependencyList): void;

//first argument
type EffectCallback = () => (void | (() => void | undefined));

//second argument
type DependencyList = ReadonlyArray<any>;

`

export const useEffectExample = `

const getName = async () => {
  const {name} = await axios.get('api/person');
  setName(name);
}
useEffect(() => {
  getName();
}, [person]);

`

