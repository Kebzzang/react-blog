const ADD_TODO='ADD_TODO';
{ type: ADD_TODO, text: 'Build my First REDUX app'}
//액션은 객체의 형태를 가지며 type을 필수로 가져야 한다.
//그 외의 상태를 변화시킬 text 같은 값은 작성자 자유임.

//액션 생성함수: 간단하게 파라미터를 받아와 
//액션을 미리 정의해줄 수 있다.
 function addTODO(text){
     return {
         type: ADD_TODO,
         text
     }
 }
//리듀서는 이렇게 작성된다. 이전의 상태와 액션을 받아 액션타입으로 미리 정의되어 있는 동작.
 function reducer(state, action){
     switch(action, type){
         //상태 업데이트 로직이 존재
     }
 }