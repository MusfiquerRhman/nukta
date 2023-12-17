import CardsSection from "./components/CardsSection";
import InputField from "./components/InputField";

const App = () => {
  return (
      <main className="flex flex-col justify-center items-center my-12">
      <InputField />
        <section className="flex flex-wrap gap-7 justify-center w-full sm:w-4/5 lg:w-9/12">
          <CardsSection />
        </section>
        <p className="my-12">Submitted by: musfiquerrhman@gmail.com</p>
      </main>
  )
}

export default App;