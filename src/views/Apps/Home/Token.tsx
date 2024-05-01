import clsx from 'clsx';

export function Tokens() {
  return (
    <div className="flex w-auto bg-[url('/hero/stat_back.png')] bg-cover bg-no-repeat">
      <section className="container mx-auto py-40 mx-48">
        <div className="flex items-center w-full my-12">
          <h1 className={clsx('text-3xl md:text-5xl 2xl:text-[60px]  font-primary max-w-[800px] 2xl:leading-[5.5rem] uppercase font-semibold md:block hidden text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]')}>
            Benefits You Can Enjoy From Lucidia Passport
          </h1>
        </div>
        <div>
          <img  
            src="../hero/blog1.png"
            alt="Blogbg"
            className="flex object-cover text-image py-16"
          />
          <img
            src="../hero/blog2.png"
            alt="Blogbg"
            className="flex object-cover text-image"
          />
        </div>
      </section>
    </div>
  );
}

export default Tokens;
