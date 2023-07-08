import ceo from "../assets/ceo.png";

const Author = () => {
  return (
    <article className="bg-slate-900 text-slate-200 grid grid-cols-1 md:grid-cols-2 p-4 my-20 divide-x-4 divide-slate-400 rounded-md">
      <div className="w-full inset-0 m-auto">
        <img src={ceo} alt="kado picture" className="h-96" />
      </div>
      <div className="text-center grid gap-2 p-5">
        <div className="text-orange-500 font-semibold">Hello there 👋,</div>
        <h2 className="text-2xl font-bold">Naitwa Alkado Heneliko</h2>
        <p className="text-xl text-slate-400">
          Ni sofware engineer, mwanzilishi na mmiliki wa kadoacademy online
          coding school. Napenda kazi yangu ya kutengeneza softwares(websites &
          apps) na kuwatambulisha watu wengine wenye uhitaji wa kujua maswala
          haya ya programmig. Kwenye course zote za hapa kadoacademy utakuwa
          nami kama mwalimu wako, Natumaini utafurahia ufundishaji wangu.
        </p>
        <p>You're welcome</p>
      </div>
    </article>
  );
};

export default Author;
