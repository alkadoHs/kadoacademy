import CodeHighlighter from "./CodeHighliter";

const HomeHeader = () => {
  const query = "const successfullyCoder = { ... }";
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
      <section>
        <h1 className="text-6xl text-slate-300 font-bold">
          Jifunze{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-indigo-400 to-purple-400">
            programming
          </span>{" "}
          kwa tani yako
        </h1>
        <p className="py-4 text-slate-400 text-xl">
          Course zote hapa ndani ya kadoacademy zimeandaliwa kwa lugha ya
          kiswahili ikiwa na maana ya kuwalenga watanzania wenye uhitaji wa
          kuzijua hizi teknolojia. <br />
          Kama hujawahi kuandika codes kabisaa!
        </p>

        <p className="text-slate-500 animate-bounce">
          Bofya kitufe kupata maelekezo. ⬇
        </p>
        <br />
        <div className="flex gap-4">
          <button className="bg-indigo-600 py-2 px-5 border-none outline-none text-slate-200 rounded-3xl">
            Nipe Maelekezo
          </button>
          <button className="bg-gradient-to-l from-indigo-500 to-purple-500 py-2 px-5 border-none outline-none text-slate-200 rounded-3xl">
            Angalia Course
          </button>
        </div>
      </section>

      <section>
        <CodeHighlighter query={query}>
          {`
          let successfullyCoder = {
            consistency: true,
            skills: ['css', 'JavaScript', 'php'],
            hardworker: true,
            problemSolver: true,
            hireable: function () {
              this.hardWorker &&
              this.problemSolver &&
              this.skills.length >= 5
            }
          };
          whereToLearn: function () {
            return "kadoacademy online school";
          };
        `}
        </CodeHighlighter>
      </section>
    </article>
  );
};

export default HomeHeader;
