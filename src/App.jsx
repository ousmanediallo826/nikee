import React from "react";
import { Hero, PopularProduct, SpecialOffer, Services, CustomerReviews, SupperQuality, Footer, Subscribe } from "./Sections";
import Nav from "./Components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>
      <section className="padding"><PopularProduct/></section>
      <section className="padding"><SupperQuality/></section>
      <section className="padding-x py-10"><Services/></section>
      <section className="padding"><SpecialOffer/></section>
      <section className="padding bg-pale-blue"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="padding-x bg-black padding-t pb-8"><Footer/></section>
    </main>
  );
};

export default App;
