import CodeHighlighter from "./CodeHighliter";

const HomeHeader = () => {
  const query = "const successfullyCoder = { ... }";
  return (
    <article className="grid grid-cols-2 gap-10 mt-5">
      <section>
        <h1 className="text-5xl text-slate-950 font-bold">
          Jifunze{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-purple-600">
            programming
          </span>{" "}
          kwa tani yako
        </h1>
        <p className="py-4 text-slate-500 text-lg">
          Course zote hapa ndani ya kadoacademy zimeandaliwa kwa lugha ya
          kiswahili ikiwa na maana ya kuwalenga watanzania wenye uhitaji wa
          kuzijua hizi teknolojia.
        </p>
        <p className="py-2 text-slate-500 text-lg">
          Kama hujui ni wapi pakuanzia ondoa shaka, nimekuandalia maelekezo
          mazuri yatakayo kutambulisha kwenye ulimwengu wa programming.
        </p>
        <p className="text-slate-700 animate-bounce">
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
