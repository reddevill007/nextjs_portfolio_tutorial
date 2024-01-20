const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="w-full md:w-1/2 text-center p-5 md:p-0">
        <h1 className="mb-5 md:text-5xl text-3xl font-bold">
          Hello World, I'm <span className="text-[#40cf8e]">Code Inertia</span>
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          quidem laboriosam repellat perferendis repudiandae, accusamus numquam!
          Dolores odio nam, neque ea sint dicta perferendis, eius, obcaecati
          unde aliquid itaque consequuntur.
        </p>
      </div>
    </div>
  );
};

export default Hero;
