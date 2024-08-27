body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.searchBar{
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: 22px;
}
.searchBar input{
  width: 400px;
  padding: 9px;
  font-size: 22px;
  border: none;
  background-color: #e7e7e7;
  border-radius: 6px;
}
.searchBar button{
  width: 90px;
  background-color: orange;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 6px;
}
.meals{
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  justify-content: center;
  width: 90%;
  /* background-color: blueviolet; */
  margin: auto;
  margin-top: 44px;

}
.meals img{
  width: 100%;
  height: 270px;
 border-top-left-radius: 11px;
 border-top-right-radius: 11px;

}
.mealImg{
  width: 280px;
  height: 380px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 3px 3px 3px rgb(240, 240, 240);
  border-radius: 11px;
}
.mealImg p{
  font-weight: 600;
}
.mealImg button{
  width: 120px;
  background-color: orange;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 21px;
  padding: 7px;
  cursor: pointer;
}
 .mealInfo img{
  width: 400px;
  height: 400px;
  border-radius: 11px;
 }
 .mealInfo {
  /* width: 90%; */
  height: 90vh;
  margin: auto;
  display: flex;
  gap: 22px;
  justify-content:center ;
  align-items: center;
  background-color: rgb(255, 181, 42);
  padding: 32px;
 }
 .mealInfo button{
  border: none;
  padding: 9px;
  border-radius: 6px;
  font-size: 19px;
  background-color: orangered;
  color: #fff;
 }
.mealInfo .info{
  margin-top: -112px;
}
