# __김지환 201740112__

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