# GraphQL 
<br>

![](../img/GraphQL.png)

## 1. GraphQL 이란? 

> GraphQL은 페이스북에서 만든 어플리케이션 레이어 쿼리 언어이다. <br>
> 기존의 웹 혹은 모바일 어플리케이션의 API를 구현 할 때는 통상적으로 [REST API]가 사용되어왔다. <br>
> REST API를 사용하여 API 서버를 구축했다면, 클라이언트사이드에서 어떠한 기능이 필요할 때마다 API서버에 데이터를 요청해야 하는데 이 때, Over-Fetching과 Under-Fetching이 발생하게된다. 


<br>

## 2.GraphQL로 해결할 수 있는 문제 
### 1. Over-fetching
>  자신이 요청한 영역의 정보보다 많은 정보를 서버에서 받는 것  
### 2. Under-fetching
> 예를들어 사용자가 SNS 어플을 실행시켰다고 가정했을 때,
> <br><br> 타임라인, 사용자 정보, 알림 정보 에대한 데이터를 불러오는 요청을 <b>여러번</b> 해야한다. 하지만 GraphQL을 이용하면 이러한 많은 정보를 <b>한번</b>의 요청으로 해결할 수 있다.


<br>

## 3. 참고 사이트 
GraphQL 소개 : https://tora-it-kingdom.tistory.com/23<br>
VELOPERT.LOG : https://velopert.com/2318


[REST API]:https://github.com/JeongWooChan/Woochan_Study/blob/master/FrontEnd_Basic/RESTAPI.md