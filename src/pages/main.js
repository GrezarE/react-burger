import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { Header } from "../components/app-header/app-header";

export const MainPage = () => {

  return (
    <>
      <Header />

      <DndProvider backend={HTML5Backend}>
        <section className="main__screen">
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </DndProvider>
    </>
  );
};
