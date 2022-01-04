import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../appHeader/appHeader";
import { BurgerIngredients } from "../burgerIngredients/burgerIngredients.js";
import { BurgerConstructor } from "../burgerConstructor/burgerConstructor";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error, info) {
    console.log("Возникла ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      // если возникла ошибка, сообщаем об этом пользователю в специальном компоненте:
      return (
        <section>
          <h1>Что-то пошло не так :(</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // если всё работает штатно, рендерим дочерние компоненты
    return this.props.children;
  }
}

export const App = () => {
  const [api, setApi] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
      fetch(apiUrl)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.statusText}`);
        })
        .then((data) => setApi(data.data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setApi(data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <ErrorBoundary>
        <Header></Header>
        <main className={appStyle.main}>
          <BurgerIngredients api={api} />
          <BurgerConstructor api={api} />
        </main>
      </ErrorBoundary>
    </div>
  );
};
