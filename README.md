# __김지환 201740112__

## __[ 2021.10.13]__ <br></br>

>- __isLoading 이라는 함수를 만들어서 해당 함수를 this.steState에 넣고, isLoading: true 를 사용하면 해당 함수가 출력이 되고, false를 사용하면 해당 코드가 사라지게 된다.__<br><br/>
>- __?sort_by=rating 라는 코드를 사용하게 되면, rating을 내림차순으로 나열해준다.__

<br></br>
### __코드 작성__ <br></br>
<h2><b>loding</b></h2>

```
this.setState({movies, isLoading: false})
```
<h2><b>rating</b></h2>

```
await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
```
<h2><b>Movie.js</b></h2>

```
function Movie({title, year, summary, poster, genres}) {
    return(
    <div className='movie'>
        <img src={poster} alt={title} title ={title} />
        <div className='movie-data'>
            <h3 className='movie-title'>{title}</h3>
            <h5 className='movie-year'>{year}</h5>
            <p className='movie-summary'>{summary}</p>
        </div> 
    </div>
    )
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
```

## __[ 2021.10.06]__ <br></br>

>- __setTimeout(() => {this.setState({isLoading : false})
},6000)___<br><br/>
>- __해당 함수를 사용하여, 6초 후 로딩중이 종료되고 지정한 값으로 넘어가는 부분을 만들었다.__<br><br/>
>- __Axios는 HTTP통신에서의 인기있는 라이브러리입니다. <br />Axios는 브라우저와 Node.js 플랫폼에서 모두 사용할 수 있습니다.__

### __코드 작성__ <br></br>


```
getMovies = async () =>{
  const{
    data: {
      data: {movies}
    }
  } = await axios.get('https://yts.mx/api/v2/list_movies.json') 
  console.log(movies)
}

```

## __[ 2021.09.29 ]__ <br></br>

>- __State 변수에 count를 0으로 지정해준 후 add 버튼과 minus 버튼을 만들어 해당 버튼 클릭 시 카운터를 변환해주는 {count : this.state.count + 1}__<br><br/>
>- __함수와, {count : this.state.count - 1}을 사용해 값을 변환해준다. this.setState을 사용하는 이유는 state 에 있는 값을 바꾸기 위해서는, this.setState 를 무조건 거쳐야 변환이 가능하기 때문이다.__

### __코드 작성__ <br></br>



```
class Apps extends Component {

  constructor(props){
    super(props)
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount...Goodbye');
  }

  state = {
    count: 0
  }

   add = () => {
    this.setState({count : this.state.count + 1})
  }
    minus = () => {
      this.setState({count : this.state.count - 1})
  }

  render() {
    console.log('render');
    return(
      <div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}


export default Apps;
```


## __[ 2021.09.15 ]__ <br></br>

### __Map 함수__ <br></br>

>- __Map 함수의 경우 선언형 프로그래밍이며, 해당 함수를 사용하여 받은 값들 하나 하나를 보여준다.__

### __코드 작성__ <br></br>

<h3>Potato.js</h3>

```
function Potato(bar){
    return<h1>I love {bar.fav}</h1>
}
export default Potato;
```
<h3>App.js</h3>


```
import Potato from "./Potato";

function App() {
  return (
    <Potato fav="potato"/>
  )

export default App;

```

<p> 

위에 만든 코드의 함수를 App.js에 import를 한 후 Potato를 return 하게 되면, index.js에서 Potato.js의 값을 노출하게 된다.

</p>

* * *
* * *




## __[ 2021.09.08 ]__ <br></br>

### __학습 내용__ <br></br>

>- __movie_app_2021-5 폴더 생성__
>- __index.js와 App.js 파일 수정__
>- __App.js 파일 내의 <span style="color:red">function</span>을 이용해 만든 값을 타 스크립트로 넘겨주려면 <span style="color:red">export default</span> 값을 사용해야 하는 것을 학습__
>- __index.js 파일 내에서 App.js의  <span style="color:red">function</span> 가져오는 법 학습__
>- __<span style="color:red">div id</span>를 사용해 html 파일에서 값을 가져가는 법 학습__

<br></br>
### __학습 정리__<br></br>
>- __리액트란?__ <br></br> - 리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다. <br></br>
>- __리액트의 개발 언어는?__<br></br> - 자바 스크립트로 이루어져 있다.<br></br>
>- __리액트의 개발자는?__<br></br> - 페이스북 및 공동체가 개발하였다.