import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/appHeader/appHeader";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { type } from "os";
import { FunctionComponent } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// const Header: FunctionComponent = (props) => {
//   return (
//     <header
//       className="header"
//       style={{
//         backgroundColor: "#1C1C21",
//         width: "100%",
//         height: 88,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {props.children}
//     </header>
//   );
// };
// const Navi: FunctionComponent = (props: any) => {
//   return (
//     <div
//       className={props.position}
//       style={{ display: "flex", alignItems: "center", marginRight: 104 }}
//     >
//       {props.children}
//     </div>
//   );
// };

// const NavigationLink = (props: any) => {
//   return (
//     <div
//       className="navigation-link mt-4 mb-4 mr-2 pl-5 pr-5"
//       style={{
//         height: 56,
//         border: "1px dashed #4C4CFF",
//         borderRadius: 40,
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       {props.children}
//     </div>
//   );
// };

// interface Position {
//   position: string;
// }

// class Nav extends React.Component<Position> {
//   render(): React.ReactNode {
//     return (
//       <div
//         className={"mt-4 mb-4 mr-2 pl-5 pr-5 " + this.props.position}
//         style={{
//           height: 56,
//           border: "1px dashed #4C4CFF",
//           borderRadius: 40,
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

// function CollapsableTextContent(props: any) {
//   if (!props.toggled) {
//     return null;
//   }
//   return <p>{props.children}</p>;
// }

// class CollapsableTextBlock extends React.Component<{ header: string }> {
//   state = { toggled: false };

//   onHeadingClick = () => {
//     this.setState({ toggled: !this.state.toggled });
//   };

//   render() {
//     return (
//       <div className="CollapsableTextBlock">
//         <h1 onClick={this.onHeadingClick}>{this.props.header}</h1>
//         <CollapsableTextContent toggled={this.state.toggled}>
//           {this.props.children}
//         </CollapsableTextContent>
//       </div>
//     );
//   }
// }

// const NaviText: FunctionComponent = (props) => {
//   return <p className="pl-2 text text_type_main-default"> {props.children}</p>;
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header></Header>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
