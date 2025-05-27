import { Button } from "../../components/ui/button";

export const MainDescription = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <h1 className="text-2xl md:text-4xl font-bold text-start text-white max-w-full md:max-w-[50%]">
        Your Contribution Will Help Us Grow
      </h1>
      <p className="text-base md:text-lg text-start text-[#F9F9F9] max-w-full md:max-w-[50%]">
        Help the Friends of Zion Museum continue to bring these incredible stories to life. Your contribution will directly impact our ability to develop new and engaging exhibits, enhance our technological offerings, and ensure that the powerful narratives of the friends of Zion resonate with visitors from around the world.
      </p>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full items-center justify-start mt-4 max-w-full md:max-w-[50%]">
        <Button type="button" variant="orange" className="w-full md:w-auto text-base md:text-lg font-semibold py-3 px-6 md:px-8">
          Donate now
        </Button>
        <a
          href="#"
          className="w-full md:w-auto flex items-center justify-center text-white font-medium text-base md:text-lg underline hover:text-orange-600 transition-colors py-3 px-6 md:px-8"
          style={{ minHeight: 48 }}
        >
          Watch Video &gt;
        </a>
      </div>
    </div>
  );
}
